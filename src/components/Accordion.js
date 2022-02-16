import React, { useState } from 'react';

import { Heading, Box } from 'theme-ui';
import { Question } from './Question';

import { AccordionItemList } from './AccordionItemList';

export const Accordion = ({ questions }) => {
  const { heading, faqs } = questions;
  const [activeIndex, setActiveIndex] = useState();
  console.log('render acordion');
  return (
    <Box>
      <Heading
        variant={'heading'}
        sx={{
          width: '80%',
          fontSize: [2, 4],
          height: '1rem',
          paddingBottom: '1.5rem',
          '@media screen and (min-width: 50em)': {
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

{
  /* 
{faqs.map((faq, idx) => (
<>
  {idx > 0 && <Divider color="muted" />}
  <Question key={idx} faq={faq} />
</>
))} */
}
