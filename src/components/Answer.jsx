import React from 'react';
import { Box } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { MarkdownContent } from './MarkdownContent';

export const Answer = ({ answer, index }) => {
  const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
  return (
    <>
      <Box
        id={index}
        sx={{
          animation: `${opacity} 0.25s linear 0s 1  `,
        }}
      >
        <MarkdownContent>{answer}</MarkdownContent>
      </Box>
    </>
  );
};
