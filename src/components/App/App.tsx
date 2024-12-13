import React, { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return <div className='counter'>
    Counter - {count}
    <button className='button' onClick={increment}>Add</button>
  </div>
}

export { App };