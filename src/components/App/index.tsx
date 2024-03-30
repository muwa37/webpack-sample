import catJpg from '@/assets/catJpg.jpg';
import catPng from '@/assets/catPng.png';
import CatSvg from '@/assets/catSvg.svg';

import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div>
      <h1>hello world</h1>
      <div>
        <div>
          {catPng}
          <img width={100} height={100} src={catPng} alt='' />
        </div>
        <div>
          {catJpg}
          <img width={100} height={100} src={catJpg} alt='' />
        </div>
      </div>

      <div>
        <CatSvg className={classes.icon} width={50} height={50} />
      </div>
      <div>
        <button className={classes.button} onClick={decrementCount}>
          -<span>decrease</span>
        </button>
        <h2 className={classes.count}>{count}</h2>
        <button className={classes.button} onClick={incrementCount}>
          +<span>increase</span>
        </button>
      </div>
      <ul>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/posts'>posts</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};