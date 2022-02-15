import React from 'react';
import { Box } from 'theme-ui';
import { Text } from 'theme-ui';
export const Answer = ({ question, answer }) => {
  return (
    <Box p={3}>
      <Text as="p">{answer}</Text>
    </Box>
  );
};
