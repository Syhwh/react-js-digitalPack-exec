import React from 'react';
import { Heading, Flex, Box } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';
import { DT, DD } from './DescriptionListComponents';

export const AccordionItem = ({ showAnswer, item, index, onClick }) => (
  <Flex
    sx={{
      padding: '20px 21px',
      justifyContent: 'space-between',
      borderBottom: '1px solid #EAE4CE',
      ':last-of-type': {
        borderBottom: 'none',
      },
    }}
  >
    <Box
      sx={{
        width: ['80%', '50%'],
      }}
    >
      <Heading
        sx={{
          fontSize: [1, 2],
        }}
        as="h2"
        variant="subHeading"
        color="secondary"
      >
        {item.question}
      </Heading>

      {showAnswer && <Answer answer={item.answer} showAnswer={showAnswer} />}
    </Box>
    <ArrowIcon onClick={onClick} showAnswer={showAnswer} />
  </Flex>
);

//
// aria-controls={`faq${index + 1}_desc`}
