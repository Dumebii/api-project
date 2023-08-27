import { useState } from 'react';
import Countries from './components/Countries';
import Header from './components/Navigation';
import DropdownFilter from './components/Functionality';

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