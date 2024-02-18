import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar'

function App() {

  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default App
