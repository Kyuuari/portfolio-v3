import type { Preview } from "@storybook/react";
import React from "react";
import "@/app/globals.css";
import { cn } from "../src/lib/utils";
import { bebas, playfair, spectral } from "../src/lib/fonts";
import { ThemeProvider } from "next-themes";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <body
        className={cn(bebas.variable, spectral.variable, playfair.variable)}
      >
        <Story />
      </body>
    </ThemeProvider>
  ),
];
