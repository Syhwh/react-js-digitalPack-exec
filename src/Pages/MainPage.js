import React from 'react';
import { Container } from 'theme-ui';
import { Accordion } from '../components/Accordion';
import data from '../utils/dataModel';

export const MainPage = () => {
  console.log(data);
  return (
    <Container
      sx={{
        padding: '32px 20px 52px 20px',
        border: '2px solid green',
        textAlign: 'left',
        '@media screen and (min-width: 50em)': {
          padding: '56px 286px',
          width: '100%',
          textAlign: 'center',
        },
      }}
    >
      <Accordion questions={data} />
    </Container>
  );
};
