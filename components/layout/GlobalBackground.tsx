"use client";

import { useEffect, useRef } from "react";
import { useIsDark } from "@/hooks/useIsDark";

interface Particle {
  x:     number;
  y:     number;
  vx:    number;
  vy:    number;
  color: string;
}

const DARK_COLORS   = ["#22d3ee", "#818cf8"];
const LIGHT_COLORS  = ["#06b6d4", "#6366f1"];
const COUNT         = 55;
const LINK_DIST     = 180;
const LINK_DIST_SQ  = LINK_DIST * LINK_DIST;
const MAX_SPEED     = 1.2;
const REPEL_RADIUS  = 100;
const REPEL_RADIUS_SQ = REPEL_RADIUS * REPEL_RADIUS;
const REPEL_FORCE   = 0.012;

function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function initParticles(w: number, h: number, colors: string[]): Particle[] {
  const list: Particle[] = [];
  const margin = 200;

  const corners = [
    { x: [0,        margin], y: [0,        margin] },
    { x: [w-margin, w],      y: [0,        margin] },
    { x: [0,        margin], y: [h-margin, h]      },
    { x: [w-margin, w],      y: [h-margin, h]      },
  ];

  // 12 corner-biased
  for (let i = 0; i < 12; i++) {
    const c = corners[i % 4];
    list.push({
      x: rand(c.x[0], c.x[1]), y: rand(c.y[0], c.y[1]),
      vx: rand(-0.25, 0.25),   vy: rand(-0.25, 0.25),
      color: colors[Math.random() < 0.5 ? 0 : 1],
    });
  }

  // 8 edge-biased
  for (let i = 0; i < 8; i++) {
    const side = Math.floor(Math.random() * 4);
    let x = 0, y = 0;
    if (side === 0) { x = rand(0, w);      y = rand(0, 80);      }
    if (side === 1) { x = rand(0, w);      y = rand(h-80, h);    }
    if (side === 2) { x = rand(0, 80);     y = rand(0, h);       }
    if (side === 3) { x = rand(w-80, w);   y = rand(0, h);       }
    list.push({
      x, y,
      vx: rand(-0.25, 0.25), vy: rand(-0.25, 0.25),
      color: colors[Math.random() < 0.5 ? 0 : 1],
    });
  }

  // 35 fully random
  for (let i = 0; i < COUNT - 20; i++) {
    list.push({
      x: rand(0, w),          y: rand(0, h),
      vx: rand(-0.25, 0.25),  vy: rand(-0.25, 0.25),
      color: colors[Math.random() < 0.5 ? 0 : 1],
    });
  }

  return list;
}

export default function GlobalBackground() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const mouseRef   = useRef({ x: -9999, y: -9999 });
  const rafRef     = useRef<number>(0);
  const ptsRef     = useRef<Particle[]>([]);
  const pausedRef  = useRef(false);
  const isDark = useIsDark();
  const isDarkRef  = useRef(true);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const colors = isDarkRef.current ? DARK_COLORS : LIGHT_COLORS;
      ptsRef.current = initParticles(canvas.width, canvas.height, colors);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function frame() {
      rafRef.current = requestAnimationFrame(frame);
      if (pausedRef.current || !canvas || !ctx) return;

      const w   = canvas.width;
      const h   = canvas.height;
      const mx  = mouseRef.current.x;
      const my  = mouseRef.current.y;
      const pts = ptsRef.current;

      ctx.clearRect(0, 0, w, h);

      // Update positions
      for (const p of pts) {
        const dx  = p.x - mx;
        const dy  = p.y - my;
        const dSq = dx * dx + dy * dy;
        if (dSq < REPEL_RADIUS_SQ && dSq > 0) {
          const dist  = Math.sqrt(dSq);
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED;
          p.vy = (p.vy / spd) * MAX_SPEED;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0) { p.x = 0; p.vx =  Math.abs(p.vx); }
        if (p.x >= w) { p.x = w; p.vx = -Math.abs(p.vx); }
        if (p.y <= 0) { p.y = 0; p.vy =  Math.abs(p.vy); }
        if (p.y >= h) { p.y = h; p.vy = -Math.abs(p.vy); }
      }

      // Connections — use squared distance to skip sqrt
      ctx.lineWidth = 0.5;
      const linkAlpha = isDarkRef.current ? 0.35 : 0.2;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx  = pts[i].x - pts[j].x;
          const dy  = pts[i].y - pts[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < LINK_DIST_SQ) {
            ctx.globalAlpha = (1 - Math.sqrt(dSq) / LINK_DIST) * linkAlpha;
            ctx.strokeStyle = pts[i].color;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots — no shadowBlur (expensive per-dot GPU call)
      ctx.globalAlpha = isDarkRef.current ? 0.7 : 0.5;
      for (const p of pts) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    function onVisibility() {
      pausedRef.current = document.hidden;
    }

    resize();
    frame();

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const colors = isDarkRef.current ? DARK_COLORS : LIGHT_COLORS;
    ptsRef.current = initParticles(canvas.width, canvas.height, colors);
  }, [isDark]);

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-colors duration-500"
      style={{
        zIndex: -1,
        backgroundColor: isDark ? "#020c18" : "#F5F7FB",
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none", willChange: "transform" }}
      />
    </div>
  );
}
