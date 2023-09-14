import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import Africa from "./components/Africa";
import America from "./components/America";
import Asia from "./components/Asia";
import Europe from "./components/Europe";
import Homepage from "./components/Homepage";
import Oceania from "./components/Oceania";
import CountryDetails from "./CountryDetails";
import countries from "./data.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/country/:code",
    element: <Country />,
  },
  {
    path: "africa",
    element: <Africa />,
  },
  {
    path: "america",
    element: <America />,
  },
  {
    path: "asia",
    element: <Asia />,
  },
  {
    path: "europe",
    element: <Europe />,
  },
  {
    path: "oceania",
    element: <Oceania />,
  },
]);

function Country() {
  // Using useParams hook to access the dynamic segment of the URL
  const { code } = useParams();
  const country$details = countries.find((cn) => cn.name === code);

  return country$details ? (
    <CountryDetails details={country$details} />
  ) : (
    <h1>Country not found</h1>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
