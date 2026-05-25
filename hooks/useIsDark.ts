"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

/**
 * Returns whether the active theme is dark.
 *
 * Before the component mounts on the client we return `true` (dark) so the
 * initial render matches the server HTML (which always uses the dark
 * defaultTheme) and avoids React hydration mismatches.
 */
export function useIsDark(): boolean {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-mount: match the server's defaultTheme = "dark"
  if (!mounted) return true;

  return resolvedTheme !== "light";
}
