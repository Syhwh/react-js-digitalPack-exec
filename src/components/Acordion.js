import React from 'react';
import { Heading } from 'theme-ui';
import { Question } from './Question';

export const Acordion = ({ questions }) => {
  const { heading, faqs } = questions;
  return (
    <>
      <Heading> {heading} </Heading>
      {faqs.map((faq, idx) => (
        <Question key={idx} faq={faq} />
      ))}
    </>
  );
};
