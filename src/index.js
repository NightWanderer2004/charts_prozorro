import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import Dashboard from './routes/Dashboard'
import Tenders from './routes/Tenders'
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
            element: <Tenders />,
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
