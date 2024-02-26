import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Johe from './page/Johe';
import Eva from './page/Eva';
import Michael from './page/Michael';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/johe',
    element: <Johe/>,
  },
  {
    path: '/eva',
    element: <Eva/>,
  },
  {
    path: '/michael',
    element: <Michael/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)