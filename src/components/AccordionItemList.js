import React from 'react';
import { AccordionItem } from './AccordionItem';
import { DL } from './DescriptionListComponents';

export const AccordionItemList = ({
  questionList = [],
  activeIndex,
  selectIndex,
}) => {
  return (
    <DL>
      {questionList.map((item, index) => {
        const showAnswer = index === activeIndex ? true : false;
        return (
          <AccordionItem
            key={index}
            showAnswer={showAnswer}
            item={item}
            index={index}
            onClick={() => {
              selectIndex(index);
            }}
          />
        );
      })}
    </DL>
  );
};
