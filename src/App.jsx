import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import UpdateAdmin from './Pages/UpdateAdmin';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/Adminpage",
    element: <AdminPage /> // Home page
  },
  {
    path: "/UpdateAdmin",
    element: <UpdateAdmin />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
