import Dropdown, { Item, Menu, Toggle } from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function DropdownFilter() {
  return (
    <div className="flex justify-between mt-8">
      <input
        type="search"
        name="q"
        className="shadow pl-10 p- pr-36 ml-10"
        placeholder="Search for a country..."
      />
      <Dropdown>
        <Toggle id="dropdown-basic" className="bg-white text-black shadow mr-5">
          Filter By Region
        </Toggle>
        <Menu>
          <Link to={"/"}>
            <Item href="#/action-1" className="no-underline">
              All
            </Item>
          </Link>
          <Link to={"/africa"}>
            <Item href="#/action-1" className="no-underline">
              Africa
            </Item>
          </Link>
          <Link to={"/america"}>
            <Item href="#/action-1" className="no-underline">
              America
            </Item>
          </Link>
          <Link to={"/asia"}>
            <Item href="#/action-1" className="no-underline">
              Asia
            </Item>
          </Link>
          <Link to={"/europe"}>
            <Item href="#/action-1" className="no-underline">
              Europe
            </Item>
          </Link>
          <Link to={"/oceania"}>
            <Item href="#/action-1" className="no-underline">
              Oceania
            </Item>
          </Link>
        </Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownFilter;
