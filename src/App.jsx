
import { useState } from 'react'
import './App.css'
import { BackgroundAnimated } from './background'
import { InputShort } from './inputshort'
import { LinkResult } from './LinkResult'




function App() {

  const [inputvalue, Setinputvalue] = useState("")

  return (
    <div className="container">
    <InputShort Setinputvalue={Setinputvalue}/>
     <BackgroundAnimated/> 
    <LinkResult inputvalue={inputvalue}/>
  
    
  
    </div>
  )
}

export default App
