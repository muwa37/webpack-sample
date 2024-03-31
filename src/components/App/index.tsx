import catJpg from '@/assets/catJpg.jpg';
import catPng from '@/assets/catPng.png';
import CatSvg from '@/assets/catSvg.svg';

import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';

function threeShaking() {
  console.log('this function wont be in bundle');
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  if (__PLATFORM__ === 'desktop') {
    console.log('app is on desktop platform');
  }

  if (__PLATFORM__ === 'mobile') {
    console.log('app is on mobile platform');
  }

  if (__ENV__ === 'development') {
    console.log('some devtools might be here');
  }

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
          -<span>dec</span>
        </button>
        <h2 className={classes.count}>{count}</h2>
        <button className={classes.button} onClick={incrementCount}>
          +<span>inc</span>
        </button>
      </div>
      <h3>env platform: {__PLATFORM__}</h3>
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
