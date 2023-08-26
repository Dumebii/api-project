import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import data from '../data.json'



const DropdownFilter = ({ item }) => {
  return(
    <div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {/* {data.map((item) => <Dropdown.Item href="#/action-1">{item.region}</Dropdown.Item>)} */}
      <Dropdown.Item href="#/action-1">Antartica</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Asia</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Australia</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Europe</Dropdown.Item>
      <Dropdown.Item href="#/action-1">North America</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Oceania</Dropdown.Item>
      <Dropdown.Item href="#/action-1">South America</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
};

export default DropdownFilter;
