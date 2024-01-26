import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//2 - importando as páginas
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Error from "./pages/error";
import Cadastro from "./pages/cadastro";

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
      },
      {
        path:"/feed",
        element:<Feed/>
      },
      {
        path:"/cadastro",
        element:<Cadastro/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/feed",
    element:<Feed/>
  },
  {
    path:"/cadastro",
    element:<Cadastro/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </React.StrictMode>
);