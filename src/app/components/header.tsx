"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme, setTheme } = useTheme();

  return (
    <div>
        <div className="">
            <Image src = "/logo.png" alt = "logo" width={80} height={80} />
        </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
