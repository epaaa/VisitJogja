import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ParallaxProvider>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </ParallaxProvider>
  </React.StrictMode>,
)