import { useState } from 'react'

import './App.css'
import ModelViewer from './slider'
import Pants from './models/pants/Pant'
import Shoe from './models/shoe/Shoe'
// import ModelViewer from './try'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{display:"flex", justifyContent:"center"}}>
     <div style={{display:"flex", flexDirection:"column" , justifyContent:"start" , alignItems:"start"}}>
        <p>SPLY</p>
        <p>YZY PODS
REGULAR PRICEBR11,470.00</p>
<p>DELIVERY WITHIN 4 WEEKS</p>
<p style={{display:"flex"}}>Order <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</p>
      </div>
  
   
      <Pants />
     

  
      
      {/* <Shoe/> */}
    </div>
    </>
  )
}

export default App;
