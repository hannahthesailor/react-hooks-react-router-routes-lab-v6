// Root.js or App.js or wherever you use createRouter
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const BrowserRouter = createBrowserRouter();

const Root = () => (
  <BrowserRouter>
    <RouterProvider routes={routes}>
      {/* Your app components and structure */}
    </RouterProvider>
  </BrowserRouter>
);

export default Root;
