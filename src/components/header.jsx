import { useContext } from "react";
import { TbBulb } from "react-icons/tb";
import { ThemeContext } from "./home";

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <div className="flex justify-between shadow  p-2">
      <h1 className="ml-10 text-2xl">Where in the world?</h1>
      <button className="flex gap-2 ml-10" onClick={theme}>
        <span className="mt-1">
          <TbBulb />
        </span>
        &nbsp;Dark mode
      </button>
    </div>
  );
}
