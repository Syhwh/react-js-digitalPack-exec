import React from 'react';
import { IconButton } from 'theme-ui';

export const ArrowIcon = ({ showAnswer }) => {
  return (
    <IconButton
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => showAnswer((answer) => !answer)}
      aria-label=""
    >
      <svg
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
