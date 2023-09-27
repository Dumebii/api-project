import { useState } from 'react';
import data from '../data.json';

export  default function Search() {
   
    

    const [searchItem, setSearchItem] = useState('');
    const [items] = useState(data.map((item) => [item.name]));
    console.log(items)

  
    const handleSearchChange = (e) => {
      setSearchItem(e.target.value);
    };

  
    const filteredItems = items.filter((item) => {
     const lowerCase = item.toLowerCase();
      lowerCase.includes(searchItem.toLowerCase())
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
      </div>
    )
  }