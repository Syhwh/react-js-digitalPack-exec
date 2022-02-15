import React from 'react';
import { Container } from 'theme-ui';
import { Accordion } from '../components/Accordion';
import data from '../utils/dataModel';

export const MainPage = () => {
  console.log(data);
  return (
    <Container
      sx={{
        padding: '32px 21px 52px 20px',
      }}
    >
      <Accordion questions={data} />
    </Container>
  );
};
