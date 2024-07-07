import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './AppName'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='contain'>
      <AppName/>
      <Content/>
      </div>
    </>
  )
}

export default App
