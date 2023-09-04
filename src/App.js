import './App.css';
import Africa from './components/Africa';
import America from './components/America'
import Asia from './components/Asia';
import Europe from './components/Europe'
import Homepage from './components/Homepage';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Oceania from './components/Oceania';
import CountryDetails from './CountryDetails';
import data from './data.json';


const router = createBrowserRouter([
  {
  path: "/",
  element: <Homepage />
},
{
  path: "/country/:code",
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
}
])


function App() {

  return (
    <RouterProvider router={router} />
  );

 
}
function Country() {
  // Using useParams hook to access the dynamic segment of the URL
  let { code } = useParams();
  const country = data.find(c => c.name === code);
  return country ? <CountryDetails country={count} /> : <h2>Country not found</h2>;
}

export default App;
