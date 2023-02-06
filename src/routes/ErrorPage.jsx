import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
   const error = useRouteError()
   console.error(error)

   return (
      <div id='error-page' className='min-h-screen flex flex-col justify-center items-center'>
         <h1 className='text-2xl font-bold mb-5'>Oops!</h1>
         <p className='text-lg mb-3'>Sorry, an unexpected error has occurred.</p>
         <p>
            <i className='text-gray-400'>{error.statusText || error.message}</i>
         </p>
      </div>
   )
}
