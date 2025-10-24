import type { Preview } from '@storybook/nextjs'
import { initialize, mswLoader } from 'msw-storybook-addon';
import { VisibilityProvider } from '../src/context/VisibilityContext';
import '../src/styles/global.css';
import '../src/styles/page.module.css';
import './storybook-overrides.css';

initialize();

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
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <VisibilityProvider>
        <Story />
      </VisibilityProvider>
    ),
  ],
  initialGlobals: {
    backgrounds: { value: 'green' },
  }
};

export default preview;