import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Details from './Details.jsx';
import './App.css';
import { ThemeProvider } from './components/ThemeContext.jsx';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "./Details.jsx",
    element: <Details />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
