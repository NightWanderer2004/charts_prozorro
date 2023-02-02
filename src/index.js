import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/UI/ErrorPage.jsx'
import Dashboard from './components/dashboard/Dashboard'
import App from './App'
import Orders from './components/orders/Orders'

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/dashboard',
            element: <Dashboard />,
         },
         {
            path: '/orders',
            element: <Orders />,
         },
      ],
   },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)
