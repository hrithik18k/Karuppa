"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { GlassNav } from "@/components/nav/GlassNav";
import { SiteFooter } from "@/components/nav/SiteFooter";
import { GrainVignette } from "@/components/atmosphere/GrainVignette";
import { AmbientSound } from "@/components/atmosphere/AmbientSound";
import { SmoothScroll } from "@/components/landing/SmoothScroll";
import { SanctumVeil } from "@/components/transitions/SanctumVeil";

export function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <>
      {!isLogin && <SmoothScroll />}
      {!isLogin && <SanctumVeil />}
      {!isLogin && <GlassNav />}
      <main id="main" className={isLogin ? "min-h-dvh" : undefined}>
        {children}
      </main>
      {!isLogin && <SiteFooter />}
      {!isLogin && <GrainVignette />}
      {!isLogin && <AmbientSound />}
    </>
  );
}
