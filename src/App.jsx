import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SupervisorPanel from './componentes/SupervisorPanel'
import TechnicianPanel from './componentes/TechnicianPanel'
import Autenticador from './componentes/Autenticador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Autenticador/>
    <SupervisorPanel/>
    <TechnicianPanel/>
    
   

    </>
  )
}

export default App
