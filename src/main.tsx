import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Johe from './pages/johe/Johe';
import Eva from './pages/eva/Eva';
import Michael from './pages/michael/Michael';
import { ParallaxProvider } from 'react-scroll-parallax';

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
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
  </React.StrictMode>,
)