import './App.css';
import Africa from './components/Africa';
import America from './components/America'
import Asia from './components/Asia';
import Europe from './components/Europe'
import Homepage from './components/Homepage';
import { createBrowserRouter, RouterProvider, useParams, Outlet } from 'react-router-dom';
import Oceania from './components/Oceania';
import CountryDetails from './CountryDetails';
import data from './data.json';

let name = data.name;

const router = createBrowserRouter([
  {
  path: "/",
  element: <Homepage />
},
{
  path: 'countries/:name',
  element: <Country />
}
,
{
  path: 'africa',
  element: <Africa />
},
{
  path: 'america',
  element: <America />
},
{
  path: 'asia',
  element: <Asia />
},
{
  path: 'europe',
  element: <Europe />
},
{
  path: 'oceania',
  element: <Oceania />
},
<Outlet />

])


function App() {

  return (
    <RouterProvider router={router} />
  );

 
}
function Country() {
  let { name } = useParams();
  // const country = data.find(c => c.name === name);
  return  <CountryDetails  /> 
}

export default App;
