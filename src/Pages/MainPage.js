import React from 'react';
import { Container } from 'theme-ui';
import { Accordion } from '../components/Accordion';
import data from '../utils/dataModel';

export const MainPage = () => {
  return (
    <Container
      sx={{
        padding: '32px 20px 52px 20px',
        textAlign: 'left',
        '@media screen and (min-width: 60em)': {
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
