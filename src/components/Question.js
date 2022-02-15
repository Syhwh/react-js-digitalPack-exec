import React, { useState } from 'react';
import { Box, Flex } from 'theme-ui';
import { Heading } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';

export const Question = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState();
  const { question, answer } = faq;
  console.log('render Question');
  return (
    <Flex>
      <Box
        sx={{
          width: ['100%'],
          border: '2px solid red',
        }}
      >
        <Heading
          p={2}
          sx={{
            width: '50%',
            fontSize: [1, 2],
            '@media screen and (min-width: 40em)': {
              width: '80%',
            },
          }}
          as="h2"
          variant="subHeading"
          color="secondary"
        >
          {question}
        </Heading>
        {showAnswer && <Answer answer={answer} />}
      </Box>
      <ArrowIcon showAnswer={setShowAnswer} answer={showAnswer} />
    </Flex>
  );
};
