import React, { memo } from 'react';
import { AccordionItem } from './AccordionItem';
import { DL } from './DescriptionListComponents';

const AccordionItemList = ({ questionList = [], activeIndex, selectIndex }) => {
  console.log('render AccordionItemList');
  console.log(activeIndex);
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
            onClick={() => selectIndex(index)}
          />
        );
      })}
    </DL>
  );
};

export default memo(AccordionItemList);
