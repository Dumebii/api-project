import './App.css';
import { useState } from 'react';
import Countries from './components/Countries';
import Header from './components/Navigation';


function App() {
  const [mode, setMode] = useState(false)
   

  return (
    <div className={mode && 'dark' }>
    <Header />
    <button className='bg-blue-500 h-[50px] w-[50px]' onClick={() => setMode(!mode)}>Dark mode</button>
    <Countries />
    </div>
  );
}

export default App;
