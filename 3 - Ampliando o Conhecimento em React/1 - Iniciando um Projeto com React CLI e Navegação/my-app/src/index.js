import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//1 - importando o router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//2 - importando as páginas
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";

//3 - configurando o router e reaproveitando a estrutura

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   }
// ]);

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    //5 - pagina de erro
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

