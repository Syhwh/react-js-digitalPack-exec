import React, { useState } from 'react';
import { Heading, Flex, Box } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';
import { DT, DD } from './DescriptionListComponents';

const AccordionItem = ({ item, index, activeIndex, selectIndex }) => {
  const isOpen = index === activeIndex;
  const [open, setOpen] = useState(isOpen);

  const handleOnclick = () => {
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
        <DT>
          <Heading p={0} as="h2" variant="subHeading" color="secondary">
            {item.question}
          </Heading>
        </DT>
        {open && isOpen && (
          <DD>
            <Answer answer={item.answer} showAnswer={open} index={index} />
          </DD>
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
