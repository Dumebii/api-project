import React, { useState } from 'react';

const DropdownSearch = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchText, setSearchText] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filteredOptions = item.filter((option) =>
    option.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="dropdown-search">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <input
            type="text"
            placeholder="Search for an option..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <ul>
            {filteredOptions.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;
















// export default function Functionality() {
//     return(
//         <div className="flex justify-between p-5">
//             <input type="search" placeholder='Search for a country...' className="p-2 ml-10 search shadow"/>
//             <input className="ml-10" />
//         </div>
//     )
// }