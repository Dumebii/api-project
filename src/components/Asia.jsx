import data from "../data.json";
import DropdownFilter from "./dropdown-filter";
import Header from "./header";

export default function Asia() {
  return (
    <div>
      <Header />
      <DropdownFilter />
      <main className="lg:grid lg:grid-cols-4 ">
        {data.map(
          (item) =>
            item.region === "Asia" && (
              <div className="w-[280px] h-[300px] m-10 shadow countries text-sm">
                <img
                  src={item.flags.png}
                  className="w-[280px] h-[130px]"
                  alt="country flags"
                />
                <section className="ml-5 mt-3">
                  <p className="font-bold">{item.name}</p>
                  <p>{item.population}</p>
                  <p>{item.region}</p>
                  <p>{item.capital}</p>
                </section>
              </div>
            )
        )}
      </main>
    </div>
  );
}
