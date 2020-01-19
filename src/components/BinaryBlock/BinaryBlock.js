import React from 'react';

import BinaryDigit from '../BinaryDigit';

import './BinaryBlock.css';

const pad = num => (num <= 9 ? `0${num}` : num);

const BinaryBlock = ({ value }) => (
  <div className="BinaryBlock">
    {pad(value)
      .toString()
      .split('')
      .map((digit, index) => (
        <BinaryDigit digit={digit} key={`binary-digit-${index}`} />
      ))}
  </div>
);

export default BinaryBlock;
