/** @type {import('@remix-run/dev').AppConfig} */

import { createRoutesFromFolders } from '@remix-run/v1-route-convention';

module.exports = {
  serverModuleFormat: 'esm',
  ignoredRouteFiles: ['**/.*'],

  routes: (defineRoutes) => {
    // `createRoutesFromFolders` will create routes for all files in the
    // routes directory using the same default conventions as Remix v1.
    return createRoutesFromFolders(defineRoutes, {
      appDirectory: 'app',
      // If you're already using `ignoredRouteFiles` in your Remix config,
      // you can move them to `ignoredFilePatterns` in the plugin's options.
      ignoredFilePatterns: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
    });
  },
};
