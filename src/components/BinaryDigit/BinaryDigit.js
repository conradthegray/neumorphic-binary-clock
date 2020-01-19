import React from 'react';

import './BinaryDigit.css';

const toBinary = num => {
  const bin = Number(num).toString(2);
  return new Array(4 - bin.length + 1).join(0) + bin;
};

const BinaryDigit = ({ digit }) => (
  <div className="BinaryDigit">
    {toBinary(digit)
      .split('')
      .map((value, index) => (
        <div
          className={`BinaryDigit-digit ${
            value === '1' ? 'BinaryDigit-digit-on' : 'BinaryDigit-digit-off'
          }`}
          key={`binary-digit-${index}`}
        />
      ))}
  </div>
);

export default BinaryDigit;
