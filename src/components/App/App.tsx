import { useState } from 'react';
import { Button } from '../Button';

import styles from  './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return <div className={styles.counter}>
    Counter - {count}
    <Button className='button' onClick={increment}>
      Увеличить
    </Button>
  </div>
}

export { App };
