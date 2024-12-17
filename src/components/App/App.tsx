import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@components/Button';

// в переменных будут пути
import froggySwing from '@assets/froggy_on_swing.png';
import froggyAndTea from '@assets/froggy_and_tea.jpg';

// Переменную можно будет использовать как React компонент
import KittySVG from '@assets/kitty.svg';

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
    
    <div className={styles.imagesRow}>
      <img width={200} height={200} src={froggySwing} alt="Лягуха на качельке" />
      <KittySVG fill='blue' height={200} width={200} />
      <img width={200} height={200} src={froggyAndTea} alt="Лягуха и чаёк" />
    </div>

    {/* Используем переменную, которая была объявлена с помощью webpack.DefinePlugin */}
    <h1>Используемая платформа - {__PLATFORM__}</h1>
    
    <Button className='button' onClick={increment}>
      Увеличить значение счётчика {count}
    </Button>
    <Outlet />
  </div>
}

export { App };
