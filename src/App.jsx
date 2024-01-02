import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModelViewer from './slider'
// import ModelViewer from './try'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>3Hello world</h1>
      <ModelViewer />
    </div>
    </>
  )
}

export default App
