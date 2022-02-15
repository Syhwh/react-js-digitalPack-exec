import React from 'react';
import { Heading } from 'theme-ui';
import { Answer } from './Answer';
import { ArrowIcon } from './ArrowIcon';

export const AccordionItem = ({
  showAnswer,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div key={item.question}>
    <dt>
      <ArrowIcon showAnswer={onClick} />

      <Heading
        p={2}
        sx={{
          width: '50%',
          fontSize: [1, 2],
          '@media screen and (min-width: 40em)': {
            width: '80%',
          },
        }}
        as="h2"
        variant="subHeading"
        color="secondary"
      >
        {item.question}
      </Heading>
      <button
        aria-expanded={showAnswer}
        aria-controls={`faq${index + 1}_desc`}
        className={`faq__question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq__desc ${showAnswer}`}
      >
        {item.answer}
        <Answer answer={item.answer} showAnswer={showAnswer} />
      </p>
    </dd>
  </div>
);
