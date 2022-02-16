import React, { memo } from 'react';
import AccordionItem from './AccordionItem';
import { DL } from './DescriptionListComponents';

const AccordionItemList = ({ questionList = [], activeIndex, selectIndex }) => {
  console.log('render AccordionItemList');
  console.log(activeIndex);
  return (
    <DL>
      {questionList.map((item, index) => {
        return (
          <AccordionItem
            key={index + item.question}
            item={item}
            index={index}
            activeIndex={activeIndex}
            selectIndex={selectIndex}
          />
        );
      })}
    </DL>
  );
};

export default AccordionItemList;
