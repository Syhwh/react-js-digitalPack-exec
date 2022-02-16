import React, { useState, memo, useMemo, useCallback } from 'react';

import { Heading, Box } from 'theme-ui';

import AccordionItemList from './AccordionItemList';

export const Accordion = ({ questions }) => {
  const { heading, faqs } = questions;
  const [activeIndex, setActiveIndex] = useState();
  console.log('render acordion');

  const MemoItemList = memo(AccordionItemList);

  const params = useMemo(() => ({ activeIndex }), [activeIndex]);
  const onClick = useCallback(() => setActiveIndex, [setActiveIndex]);
  return (
    <Box>
      <Heading
        variant={'heading'}
        sx={{
          width: '80%',
          fontSize: [2, 4],
          height: '1rem',
          paddingBottom: '1.5rem',
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
        selectIndex={setActiveIndex}
      />
    </Box>
  );
};
