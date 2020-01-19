import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import BinaryBlock from '../BinaryBlock';

import './BinaryClock.css';

const BinaryClock = () => {
  let [now, setNow] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
  });

  useInterval(() => {
    const currentNow = new Date();

    setNow({
      hour: currentNow.getHours(),
      minutes: currentNow.getMinutes(),
      seconds: currentNow.getSeconds(),
    });
  }, 1000);

  return (
    <div className="BinaryClock">
      <BinaryBlock value={now.hour} />
      <BinaryBlock value={now.minutes} />
      <BinaryBlock value={now.seconds} />
    </div>
  );
};

export default BinaryClock;
