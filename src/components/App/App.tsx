import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '../Button';

import styles from  './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return <div className={styles.container}>
    <div className={styles.navigation}>
      <Link to='/about'>
        О нас
      </Link>
      <Link to='/info'>
      Инфо
      </Link>
    </div>
    
    <Button className='button' onClick={increment}>
      Увеличить значение счётчика {count}
    </Button>
    <Outlet />
  </div>
}

export { App };
