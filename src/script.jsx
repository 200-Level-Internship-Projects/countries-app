import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import About from './About.jsx';
import './App.css';
import { ThemeProvider } from './components/ThemeContext.jsx';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
