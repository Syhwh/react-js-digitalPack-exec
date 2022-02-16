import React, { useState, memo, useCallback } from 'react';
import { Heading, Flex, Box } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';
import { DT, DD } from './DescriptionListComponents';

const AccordionItem = ({
  showAnswer,
  item,
  index,
  activeIndex,
  selectIndex,
}) => {
  console.log('render accordion ITEM');
  // console.log(activeIndex);
  // console.log(index);
  const isOpen = index === activeIndex;
  const [open, setOpen] = useState(isOpen);

  const handleOnclick = () => {
    console.clear();
    console.log(index);
    console.log(activeIndex);
    console.log(open);
    console.log(isOpen);
    selectIndex(index);
    setOpen(isOpen && !open ? isOpen : !isOpen);
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
          <Answer answer={item.answer} showAnswer={open} index={index} />
        )}
      </Box>
      <ArrowIcon
        handleClick={handleOnclick}
        showAnswer={open}
        isOpen={isOpen}
        index={index}
      />
    </Flex>
  );
};

export default AccordionItem;
