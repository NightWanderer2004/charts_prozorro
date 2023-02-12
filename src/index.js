import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import Plans from './routes/Plans'
import Tenders from './routes/Tenders'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ItemPage from './routes/ItemPage'
import WelcomePage from './routes/WelcomePage'

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <WelcomePage />,
         },
         {
            path: '/plans',
            element: <Plans />,
         },
         {
            path: '/tenders',
            element: <Tenders />,
         },
         {
            path: '/:type/:itemId',
            element: <ItemPage />,
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
