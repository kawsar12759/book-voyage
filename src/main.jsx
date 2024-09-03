import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/bookdetails/:id",
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch('/books.json')
      },
      {
        path:"/listedbooks",
        element:<ListedBooks></ListedBooks>,
        loader: ()=> fetch('/books.json')
      },
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>,
        loader: ()=> fetch('/books.json')
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
