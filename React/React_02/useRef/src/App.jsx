import {React, useState,useRef, useEffect} from 'react'

const App = () => {
const [incomeTax,setIncomeTax] = useState(20000)

const devRef = useRef();


useEffect(()=>{
setTimeout(()=>{
  console.log(devRef.current);
setIncomeTax(devRef.current.innerHTML= 10)
},5000)
},[])

  return (
    <div>
hi there ,your incometax returns are <div ref={devRef}>{incomeTax}</div>
    </div>
  )
}

export default App;