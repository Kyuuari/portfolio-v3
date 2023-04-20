import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { AccordionDemo } from "../components/accordion-demo";
import { ThemeProvider } from "next-themes";

const meta: Meta<typeof AccordionDemo> = {
  title: "component/AccordionDemo",
  component: AccordionDemo,
  parameters: {
    layout: "fullscreen",
  },
  // decorators: [
  //   (Story) => (
  //     <ThemeProvider defaultTheme="system">
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
};

export default meta;
type Story = StoryObj<typeof AccordionDemo>;

export const Default: Story = {};
