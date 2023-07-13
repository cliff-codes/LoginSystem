import { useState } from 'react'
import './App.css'
import AuthPage from './AuthPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <Routes>
            <Route index element = {<AuthPage/>} />
            <Route path='/home' element = {<Homepage/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
