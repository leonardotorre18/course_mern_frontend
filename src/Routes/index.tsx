import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../views/Root';
import Login from '../views/Login';
import Register from '../views/Register';

const router =  createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'login',
        element: <Login />
      }, {
        path: 'register',
        element: <Register />
      }
    ]
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />
}
