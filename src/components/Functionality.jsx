import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import data from '../data.json'
import Countries from './Countries';



const DropdownFilter = ({ item }) => {

    let filterItems = [ 'All', 'Asia', 'Africa', 'Europe', 'America', 'Oceania'];
    const [selectedRegion, setSelectedRegion] = useState('All');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const filteredItems =
    selectedRegion === 'All'
      ? data
      : data.filter((item) => item.region === selectedRegion);
  
  return(
    <div>
       <h1>Filter by Category</h1>
      <div>
        <label htmlFor="region">Select a region: </label>
        <select
          id="region"
          value={selectedRegion}
          onChange={(e) => handleRegionChange(e.target.value)}
        >
          {filterItems.map((region) => (
            <option value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
        {filteredItems.map((item, index) => (
          <Countries />
        ))}
    </div>
  )
};

export default DropdownFilter;
