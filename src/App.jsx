import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouter from './ReactRouter/MainRouter'

function App() {
  const [input,setInput]=useState(0)
  const [count, setCount] = useState(0)
  const [inputvalue,setInputvalue] =useState('')
  const ref=useRef(0);
console.log('hellllllo'); 
  function handeler(){
    ref.current = ref.current + 1
    }

    function setInput1(){
      count + 1
    }

    const handleinputchange=(event)=>{
      setInputvalue(event.target.value)
    }

    console.log(ref)
     console.log(inputvalue)
  return (
    <>
    <MainRouter></MainRouter>

      <div className="card">
        <input type="text" ref={handeler} onChange={setCount} />
        <h1>{ref.current}</h1>
         
        <input type="text" onChange={handleinputchange}/>
        <h1>this is the changer value {inputvalue}</h1>
       
       </div>
     
    </>
  )
}

export default App
