import React from 'react';
import { MainPage } from './Pages/MainPage';
import ThemeProvider from './ThemeProvider/ThemeProvider';
import './style.css';

export default function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}
