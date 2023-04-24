import type { Meta, StoryObj } from "@storybook/react";
import { AccordionDemo } from "../../src/components/accordion-demo";

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
