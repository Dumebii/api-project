import './App.css';
import Africa from './components/Africa';
import America from './components/America'
import Asia from './components/Asia';
import Europe from './components/Europe'
import Homepage from './components/Homepage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Oceania from './components/Oceania';


const router = createBrowserRouter([
  {
  path: "/",
  element: <Homepage />
},
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

export default App;
