import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export -- Required for Vitest
export default defineConfig({
  test: {
    globals: true,
    reporters: ['verbose'],
    disableConsoleIntercept: true,
    // setupFiles: ['test/setup.ts'],
    include: ['**/*.spec.ts']
  }
});
