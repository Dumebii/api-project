import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'



const DropdownFilter = ({ }) => {
  return(
    <div className='flex justify-between mt-8'>
    <input type='search' name='q' className='shadow pl-10 p- pr-36 ml-10' placeholder='Search for a country...'/>
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" className='bg-white text-black shadow mr-5'>
        Filter By Region
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to={'/'}><Dropdown.Item href="#/action-1" className='no-underline'>All</Dropdown.Item></Link>
        <Link to={'/africa'}><Dropdown.Item href="#/action-1" className='no-underline'>Africa</Dropdown.Item></Link>
        <Link to={'/america'}><Dropdown.Item href="#/action-1" className='no-underline'>America</Dropdown.Item></Link>
        <Link to={'/asia'}><Dropdown.Item href="#/action-1" className='no-underline'>Asia</Dropdown.Item></Link>
        <Link to={'/europe'}><Dropdown.Item href="#/action-1" className='no-underline'>Europe</Dropdown.Item></Link>
        <Link to={'/oceania'}><Dropdown.Item href="#/action-1" className='no-underline'>Oceania</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
};

export default DropdownFilter;
