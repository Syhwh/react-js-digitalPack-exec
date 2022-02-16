import React, { useState } from 'react';
import { Heading, Flex, Box } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';
import { DT, DD } from './DescriptionListComponents';

export const AccordionItem = ({
  showAnswer,
  item,
  index,
  activeIndex,
  selectIndex,
}) => {
  console.log('render accordion ITEM');
  const [open, setOpen] = useState();

  console.log(activeIndex);
  console.log(index);
  const isOpen = index === activeIndex;

  const handleOnclick = () => {
    selectIndex(index);
    setOpen((open) => !open);
  };

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
          maxWidth: '90%',
          textAlign: 'left',
        }}
      >
        <Heading p={0} as="h2" variant="subHeading" color="secondary">
          {item.question}
        </Heading>
        {open && isOpen && (
          <Answer answer={item.answer} showAnswer={showAnswer} />
        )}
      </Box>
      <ArrowIcon
        handleClick={handleOnclick}
        showAnswer={open}
        isOpen={isOpen}
      />
    </Flex>
  );
};
//
// aria-controls={`faq${index + 1}_desc`}
