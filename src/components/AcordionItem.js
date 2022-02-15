import React from 'react';

export const AccordionItem = ({
  showAnswer,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div key={item.question}>
    <dt>
      <ArrowIcon />
      <button
        aria-expanded={ariaExpanded}
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
        <Answer answer={item.answer} />
      </p>
    </dd>
  </div>
);
