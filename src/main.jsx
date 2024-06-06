import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NewsLetter from './pages/NewsLetter';
import Layout from './Layout';
import { loader as homeLoader } from './pages/Home';
import { loader as singleLoader } from './components/SingleCard';
import SingleCard from './components/SingleCard';
import {QueryClient ,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
const client  = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60 *3
    }
  }
})
const router  = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:homeLoader(client)
      },
      {
        path:'/:id',
        element:<SingleCard/>,
        loader:singleLoader(client)
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/news',
        element:<NewsLetter/>
      }
    ]
  },
  {
    path:'*',
    element:<h1>Route Doesnt Exists</h1>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <RouterProvider  router={router}/>
    <ReactQueryDevtools initialIsOpe={false}/>
    </QueryClientProvider>
  </React.StrictMode>
);
