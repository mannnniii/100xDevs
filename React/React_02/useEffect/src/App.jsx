import { React, useState, useEffect } from 'react'

import "./App.css";

const App = () => {
  const [exchangedata, setExchangeData] = useState({})
  const [bankdata, setBankData] = useState({})
  console.log("hi there logg");

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      })
    }, 3000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      })
    }, 1000)
  }, [])


  const incomeTax = (bankdata.income + exchangedata.returns) * 0.3;

  return (
    <>
      hi there our income tax returns are {incomeTax}
    </>
  )
}

export default App;