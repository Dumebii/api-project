import './App.css';
import { useEffect, useState } from 'react'
import data from './data.json'


function App() {
  const [item, setItem]= useState([]);
  
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(json => setItem(json))
  },[])
  
  console.log(data.length)

  let isLoggedIn = true
  return (
    <div>
    <main className=" grid grid-cols-4">
        { data.map((item) => <section>
          <div className='w-[250px] h-[250px] m-10 countries text-sm'>
            <><img src={item.flags.png} alt='country flags' /></>
            <p className='font-bold'>{item.name}</p>
            <p>{item.population}</p>
            <p>{item.region}</p>
            <p>{item.capital}</p>
          </div>
        </section>)}
        </main>
    </div>
  );
}

export default App;
