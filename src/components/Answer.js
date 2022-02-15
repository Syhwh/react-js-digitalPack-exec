import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from 'theme-ui';
import { Text } from 'theme-ui';
export const Answer = ({ answer }) => {
  console.log('render question');
  return (
    <Text
      p={3}
      as="p"
      sx={{
        height: answer && '2rem',
        marginBottom: answer && '15px',
      }}
    >
      <ReactMarkdown>{answer}</ReactMarkdown>
    </Text>
  );
};
