import React from 'react';
import { Heading, Flex, Box } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';
import { DT, DD } from './DescriptionListComponents';

export const AccordionItem = ({ showAnswer, item, index, onClick }) => {
  console.log('render accordion ITEM');
  return (
    <Flex
      sx={{
        padding: '19px 0',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottom: '1px solid #EAE4CE',
        ':last-of-type': {
          borderBottom: 'none',
        },
      }}
    >
      <Box
        sx={{
          border: '2px solid red',
          maxWidth: '90%',
          textAlign: 'left',
        }}
      >
        <Heading p={0} as="h2" variant="subHeading" color="secondary">
          {item.question}
        </Heading>
        {showAnswer && <Answer answer={item.answer} showAnswer={showAnswer} />}
      </Box>
      <ArrowIcon onClick={onClick} showAnswer={showAnswer} />
    </Flex>
  );
};
//
// aria-controls={`faq${index + 1}_desc`}
