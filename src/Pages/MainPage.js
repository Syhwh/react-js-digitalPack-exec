import React from 'react';
import { Acordion } from '../components/Acordion';
import data from '../utils/dataModel';

export const MainPage = () => {
  console.log(data);
  return <Acordion questions={data} />;
};
