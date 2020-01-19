import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import BinaryBlock from '../BinaryBlock';

import './BinaryClock.css';

const getCurrentTime = () => {
  const now = new Date();

  return {
    hour: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
};

const BinaryClock = () => {
  let [now, setNow] = useState(getCurrentTime());

  useInterval(() => {
    setNow(getCurrentTime());
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
