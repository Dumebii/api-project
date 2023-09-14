// import countries from "../data.json";

export default function CountryDetails({ details }) {
  const { name: country$name } = details;
  return (
    <div>
      <h2>{country$name}</h2>
    </div>
  );
}
