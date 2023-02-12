import s from './styles/main.module.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Content from './components/UI/Content'

function App() {
   return (
      <div className='min-h-screen overflow-hidden'>
         <Navbar />
         <main className={s.main}>
            <Sidebar />
            <Content>
               <Outlet />
            </Content>
         </main>
      </div>
   )
}

export default App
