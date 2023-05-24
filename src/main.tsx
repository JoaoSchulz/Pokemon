import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home/index.tsx'
import { Pokedex } from './routes/Pokedex/index.tsx'
import { Erro } from './routes/Error/index.tsx'
import { CardModal } from './components/CardModal/index.tsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Pokedex",
        element: <Pokedex />,
      },
      {
        path:"/Legendaries",
        element: <CardModal />
      },
      {
        path:"*",
        element: <Erro/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 
