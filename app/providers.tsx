"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import StarsCanvas from "./components/background/StarsBackground";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      <StarsCanvas />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
