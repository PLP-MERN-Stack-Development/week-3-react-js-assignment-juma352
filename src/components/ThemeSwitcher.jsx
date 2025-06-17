import React, { useContext } from 'react';
import { ThemeContext } from '../lib/ThemeContext';
import { Button } from './ui/button';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button variant="outline" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeSwitcher;
