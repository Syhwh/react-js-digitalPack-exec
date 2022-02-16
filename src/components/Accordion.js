import React, { useState } from 'react';

import { Heading, Box } from 'theme-ui';
import { Question } from './Question';

import { AccordionItemList } from './AccordionItemList';

export const Accordion = ({ questions }) => {
  const { heading, faqs } = questions;
  const [activeIndex, setActiveIndex] = useState();
  console.log('render acordion');
  return (
    <Box paddingTop={20}>
      <Heading
        sx={{
          width: '50%',
          fontSize: [3, 5],

          '@media screen and (min-width: 40em)': {
            width: '100%',
            // color: 'green',
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
