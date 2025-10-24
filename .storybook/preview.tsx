import type { Preview } from '@storybook/nextjs'
import { VisibilityProvider } from '../src/context/VisibilityContext';
import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <VisibilityProvider>
        <Story />
      </VisibilityProvider>
    ),
  ],
};

export default preview;