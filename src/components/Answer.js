import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from 'theme-ui';
import { Text } from 'theme-ui';
export const Answer = ({ answer }) => {
  console.log('render question');
  return (
    <Box p={3}>
      <Text as="p">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </Text>
    </Box>
  );
};
