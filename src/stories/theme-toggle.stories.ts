import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { AccordionDemo } from '../components/accordion-demo';
import ThemeToggle from '@/components/theme-toggle';

// import { Page } from './Page';


//TEMPLATE ONLY USE AS BOILERPLATE
const meta: Meta<typeof ThemeToggle> = {
  title: 'component/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
    argTypes: {
      size:{
        options: [
          "sm",
          "lg",
          "square"
        ]
      },
    varient: {
      options: 
    [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
  ]
    ,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const Lg: Story = {
  args: {
    size: 'lg',
  },
};


// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
