import React, { useState } from 'react';
import { Heading, Divider } from 'theme-ui';
import { Question } from './Question';

import { AcordionList } from './AccordionList';

export const Accordion = ({ questions }) => {
  const { heading, faqs } = questions;
  const [activeIndex, setActiveIndex] = useState(1);
  console.log('render acordion');
  return (
    <AcordionList activeIndex={activeIndex} selectIndex={setActiveIndex} />
  );
};

{
  /* <Heading
sx={{
  width: '50%',
  '@media screen and (min-width: 40em)': {
    width: '20%',
    color: 'green',
  },
}}
>
{' '}
{heading}{' '}
</Heading>
{faqs.map((faq, idx) => (
<>
  {idx > 0 && <Divider color="muted" />}
  <Question key={idx} faq={faq} />
</>
))} */
}
