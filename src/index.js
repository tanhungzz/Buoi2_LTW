import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Nếu bạn muốn sử dụng App
import reportWebVitals from './reportWebVitals';
import { router} from './containers/Route';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();