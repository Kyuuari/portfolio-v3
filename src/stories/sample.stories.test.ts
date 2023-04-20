import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { AccordionDemo } from '../components/accordion-demo';

// import { Page } from './Page';


//TEMPLATE ONLY USE AS BOILERPLATE
const meta: Meta<typeof AccordionDemo> = {
  title: 'Example/Page',
  component: AccordionDemo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionDemo>;

export const Default: Story = {};

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
