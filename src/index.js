import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './Pages/Home';

// Styles
import './Styles/all.min.css';
import './Styles/Global-Rules/global-rules.css';
import './Styles/tailwind.css';
import './Styles/All-Components/all-components.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <Home />,},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
