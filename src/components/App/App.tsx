import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return <div>
    Counter - {count}
    <button onClick={() => setCount(prev => prev + 5)}>Add</button>
  </div>
}

export { App };