import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AddCoffee from './Components/AddCoffe.jsx'; // Fixed typo
import UpdateCoffee from './Components/UpdateCoffe.jsx'; // Fixed typo
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/add-coffee',
    element: <AddCoffee />,
  },
  {
    path: '/update-coffee',
    element: <UpdateCoffee />,
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);