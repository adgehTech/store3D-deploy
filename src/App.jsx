import { useState } from 'react'

import './App.css'
import ModelViewer from './slider'
import Pants from './models/pants/Pant'
// import ModelViewer from './try'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>3Hello world</h1>
      <Pants />
    </div>
    </>
  )
}

export default App;
