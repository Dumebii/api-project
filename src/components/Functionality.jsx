import React, { useState } from 'react';

const DropdownFilter = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filterText, setFilterText] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filteredOptions = item.regions.filter((option) =>
    option.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="dropdown-filter">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </div>
      {isOpen && (
        <div className="dropdown-content">
       
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

export default DropdownFilter;
