import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Text } from 'theme-ui';
// import { css } from 'styled-components';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

export const Answer = ({ answer }) => {
  console.log('render Answer');
  return (
    <>
      <Text
        as="p"
        variant="regular"
        style={{
          fontSize: [0, 1],
          wordBreak: 'break-all',
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          animationDuration: '3s',
          animationName: 'fadeIn',
          ':before': {},
        }}
      >
        {answer}
      </Text>
      <SMD>{answer}</SMD>
    </>
  );
};

// const inlineStyle = css`
//     color: #333;
// `;

export const SMD = styled(ReactMarkdown)`

  padding:0;
  margin:0;

  color:red;
  border:5px solid blue;
  // word-break:break-all;
  overflow-wrap: break-word;
  overflow:hidden;
  

`;
