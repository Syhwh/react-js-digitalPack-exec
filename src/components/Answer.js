import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from 'theme-ui';
import { Text } from 'theme-ui';
// import { css } from 'styled-components';
import styled from '@emotion/styled';

export const Answer = ({ answer }) => {
  console.log('render question');
  return (
    // <Text
    //   as="p"
    //   style={{
    //     fontSize: [1, 2],
    //     border: '2px solid red',
    //     wordBreak: 'break-all',
    //     // whiteSpace: 'normal',
    //     whiteSpace: 'pre-wrap',
    //     overflow: 'hidden',
    //   }}
    // >
    // </Text>
    <ReactMarkdown>{answer}</ReactMarkdown>
  );
};

// const inlineStyle = css`
//     color: #333;
// `;

// export const SMD = styled(ReactMarkdown)`

//   padding:0;
//   margin:0;
//   max-width:80%;
//   color:red;
//   border:5px solid blue;
//   // word-break:break-all;
//   overflow-wrap: break-word;
//   overflow:hidden;

// `;
