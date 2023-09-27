import { useState } from 'react';
import Countries from './Countries';
import Header from './Navigation';
import DropdownFilter from './Functionality';
import { createContext } from 'react';
import Search  from './Search';

   export const ThemeContext = createContext();

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
    <div className='flex space-a'>
      <Search />
      <DropdownFilter />
    </div>
    <Countries />
    </div>
    )
}