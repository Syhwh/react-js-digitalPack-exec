import React from 'react';
import { IconButton } from 'theme-ui';

export const ArrowIcon = ({ showAnswer, onClick }) => {
  console.log('render ArrowIcon');
  console.log(showAnswer);
  return (
    <IconButton
      sx={{
        padding: 0,
        cursor: 'pointer',
        transform: showAnswer ? 'rotateZ(90deg)' : '',
        border: '2px solid red',
        height: '1rem',
      }}
      onClick={onClick}
      aria-controls="widget1"
      aria-expanded={showAnswer}
    >
      <svg
        style={{
          translate: '25%',
        }}
        width="24"
        height="12"
        viewBox="0 0 24 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 11.5L23 6M23 6L16 0.499998M23 6L-2.00344e-07 6"
          stroke="#113034"
        />
      </svg>
    </IconButton>
  );
};
