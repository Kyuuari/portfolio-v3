import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";
import { Icons } from "@/components/icons";

type Props = {
  size?: "sm" | "lg" | "square";
  varient?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

export default function ThemeToggle({
  size = "square",
  varient = "default",
}: Props) {
  const { setTheme, theme = "light" } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const themeIcons: { [key: string]: JSX.Element } = {
    light: <Icons.sun />,
    dark: <Icons.moon />,
  };

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    setTheme(newTheme);
  };

  return (
    <Button size={size} variant={varient} onClick={toggleTheme}>
      {themeIcons[theme]}
    </Button>
  );
}
