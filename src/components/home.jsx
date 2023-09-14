import { createContext, useState } from "react";
import Countries from "./countries";
import DropdownFilter from "./dropdown-filter";
import Header from "./header";

export const ThemeContext = createContext();

export default function Home() {
  const [mode, setMode] = useState(false);
  const change$theme = () => setMode(!mode);

  return (
    <div className={`${mode ? "dark" : ""}`}>
      <ThemeContext.Provider value={change$theme}>
        <Header />
      </ThemeContext.Provider>
      <DropdownFilter />
      <Countries />
    </div>
  );
}
