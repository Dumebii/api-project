import './App.css';
import { useState, useEffect } from 'react';
import data from './data.json'
import Countries from './components/Countries';
import Header from './components/Navigation';
import DropdownFilter from './components/Functionality';


function App() {
  const [mode, setMode] = useState(false)
   function onClick() {
    setMode(!mode)
   }

   const [item, setItem]= useState([]);
  
  useEffect(()=>{ 
    fetch('./data.json')
    .then(res => res.json())
    .then(json => setItem(json))
  },[])
  console.log(item);

  return (
    <div className={mode && 'dark' }>
    <Header onClick={onClick} />
    <DropdownFilter item={item}/>
    <Countries item={item} />
    </div>
  );
}

export default App;
