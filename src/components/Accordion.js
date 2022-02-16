import React, { useState, memo, useMemo, useCallback } from 'react';

import { Heading, Box } from 'theme-ui';

import AccordionItemList from './AccordionItemList';

export const Accordion = ({ questions }) => {
  const { heading, faqs } = questions;
  const [activeIndex, setActiveIndex] = useState();
  const onClick = useCallback(
    (idx) => {
      setActiveIndex(idx);
    },
    [activeIndex]
  );
  return (
    <Box>
      <Heading
        variant={'heading'}
        sx={{
          width: '80%',
          fontSize: [2, 4],
          height: '1rem',
          marginBottom: '1.8rem',
          '@media screen and (min-width: 40em)': {
            width: '100%',
          },
        }}
      >
        {heading}
      </Heading>
      <AccordionItemList
        questionList={faqs}
        activeIndex={activeIndex}
        selectIndex={onClick}
      />
    </Box>
  );
};
