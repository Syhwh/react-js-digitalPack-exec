import React from 'react';
import { AccordionItem } from './AccordionItem';

export const AccordionItemList = ({
  questionList,
  activeIndex,
  selectIndex,
}) => {
  return (
    <>
      {questionList.map((item, index) => {
        const showAnswer = index === activeIndex ? 'show-description' : '';
        const ariaExpanded = index === activeIndex ? 'true' : 'false';
        return (
          <AccordionItem
            showAnswer={showAnswer}
            ariaExpanded={ariaExpanded}
            item={item}
            index={index}
            onClick={() => {
              selectIndex(index);
            }}
          />
        );
      })}
    </>
  );
};
