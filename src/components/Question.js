import React, { useState } from 'react';
import { Box, Flex } from 'theme-ui';
import { Heading } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';

export const Question = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState();
  const { question, answer } = faq;
  return (
    <Flex>
      <Box>
        <Heading as="h2" variant="subHeading" color="secondary">
          {question}
        </Heading>
        {showAnswer && <Answer  answer={answer} />}
      </Box>
      <ArrowIcon showAnswer={setShowAnswer} />
    </Flex>
  );
};
