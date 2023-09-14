import { Link } from "react-router-dom";
import data from "../data.json";

export default function Countries() {
  return (
    <div>
      <Link to={`/country/${country.name}`}>
        <main className=" lg:grid lg:grid-cols-4">
          {data.map((item) => (
            <section key={item.name}>
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
            </section>
          ))}
        </main>
      </Link>
    </div>
  );
}
