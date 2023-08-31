import { useState } from 'react';
import Countries from './Countries';
import Header from './Navigation';
import DropdownFilter from './Functionality';
import { createContext } from 'react';

   export const ThemeContext = createContext('false');

export default function Homepage() {
    const [mode, setMode] = useState(false)
   function onClick() {
    setMode(!mode)
   }

    return(
    <div className={mode && 'dark' }>
    <ThemeContext.Provider value={onClick}>
    <Header  />
    </ThemeContext.Provider>
    <DropdownFilter />
    <Countries />
    </div>
    )
}