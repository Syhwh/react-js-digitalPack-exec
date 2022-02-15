import React from 'react';
import { MainPage } from './Pages/MainPage';
import Prov from './ThemeProvider/ThemeProvider';
import './style.css';

export default function App() {
  return (
    <Prov>
      <MainPage />
    </Prov>
  );
}
