import React, { useState } from 'react';
import CountContext from "./Context.jsx"
import { useContext } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext)
  return (
    <div>
      {count}
    </div>
  );
}

function Buttons({ setCount }) {
  const count = useContext(CountContext)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
