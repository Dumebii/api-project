import { useState } from 'react';
import data from '../data.json';

export  default function Search() {
   
    const updatedNames = []
    const names = data.map((item) => item.name);
    updatedNames.push(names)
    const [searchItem, setSearchItem] = useState('');
    const [items] = useState(names);
    console.log(updatedNames)

  
    const handleSearchChange = (e) => {
      setSearchItem(e.target.value);
    };

  
    const filteredItems = updatedNames.filter((item) => {
     item.toString().toLowerCase().includes(searchItem.toLowerCase())
});
  
    return(
      <div>
        <h2>Searchable List</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchItem}
          onChange={handleSearchChange}
        />
      <main className=" lg:grid lg:grid-cols-4">
        { filteredItems.map((item) => <section key={item.name}>
          <div className='w-[280px] h-[300px] m-10 shadow countries text-sm'>
            <img src={item.flags.png} className='w-[280px] h-[130px]' alt='country flags' />
            <section className='ml-5 mt-3'>
            <p className='font-bold'>{item.name}</p>
            <p>{item.population}</p>
            <p>{item.region}</p>
            <p>{item.capital}</p></section>
          </div>
        </section>)}
        </main>
      </div>
    )
  }