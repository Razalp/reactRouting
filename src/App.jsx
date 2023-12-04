import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouter from './ReactRouter/MainRouter'

function App() {
  const [input,setInput]=useState(0)
  const [count, setCount] = useState(0)
  const ref=useRef(0);
console.log('hellllllo')
  function handeler(){
    ref.current = ref.current + 1
    }

    function setInput1(){
      count + 1
    }


    console.log(ref)
  return (
    <>
    <MainRouter></MainRouter>

      <div className="card">
        <input type="text" ref={handeler} onChange={setInput} />
        <h1>{ref.current}</h1>
         
        
       </div>
     
    </>
  )
}

export default App
