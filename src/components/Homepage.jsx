import { useState } from 'react';
import Countries from './Countries';
import Header from './Navigation';
import DropdownFilter from './Functionality';

export default function Homepage() {
    const [mode, setMode] = useState(false)
   function onClick() {
    setMode(!mode)
   }
    return(
    <div className={mode && 'dark' }>
    <Header onClick={onClick} />
    <DropdownFilter />
    <Countries />
    </div>
    )
}