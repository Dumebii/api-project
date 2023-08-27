import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";



const DropdownFilter = ({ }) => {
  return(
    <>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter By Region
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to={'/'}><Dropdown.Item href="#/action-1">All</Dropdown.Item></Link>
        <Link to={'/africa'}><Dropdown.Item href="#/action-1">Africa</Dropdown.Item></Link>
        <Link to={'/america'}><Dropdown.Item href="#/action-1">America</Dropdown.Item></Link>
        <Link to={'/asia'}><Dropdown.Item href="#/action-1">Asia</Dropdown.Item></Link>
        <Link to={'/europe'}><Dropdown.Item href="#/action-1">Europe</Dropdown.Item></Link>
        <Link to={'/oceania'}><Dropdown.Item href="#/action-1">Oceania</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
};

export default DropdownFilter;
