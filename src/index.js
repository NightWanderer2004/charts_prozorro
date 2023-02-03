import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/UI/ErrorPage.jsx'
import Dashboard from './routes/Dashboard'
import Orders from './routes/Orders'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

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
   <Provider store={store}>
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
   </Provider>
)
