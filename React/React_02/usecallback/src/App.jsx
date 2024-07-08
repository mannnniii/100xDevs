import React, { useCallback, useEffect, useMemo, useState } from 'react';

const App = () => {

  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  // useCallback is not about minimizing the amount of code that is run.
  // useCallback is about not rendering a child component , if the function hasn't/doesnt need to change across renders.

  const calculatecryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;

  }, [exchange1Data, exchange2Data])

  return (
    <div>
      <CryptoGainsCalculator calculatecryptoReturns={calculatecryptoReturns} />
    </div>
  );
};

const CryptoGainsCalculator = (function ({ calculatecryptoReturns }) {
  console.log("crypto child re-rendered");
  return <div>
    your crypto returns are {calculatecryptoReturns()}
  </div>
})

export default App;
