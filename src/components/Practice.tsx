import { useState } from "react";

const Practice = () => {
  const countries = [
    { name: "Pakistan", cities: ["Karachi", "Lahore", "Islamabad"] },
    { name: "USA", cities: ["New York", "Washington", "California"] },
    { name: "UK", cities: ["London", "Manchester", "Birmingham"] },
  ];

  const [selectedCountry, setCountry] = useState(countries[0]);
  const [selectedCity, setCity] = useState(countries[0].cities[0]);

  return (
    <div className="p-4">
      <h1>Practice</h1>
      <div className="flex gap-4 items-center justify-center max-w-lg mt-4">
        <span className="w-max">Does the</span>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => {
            const country = countries.find(
              (country) => country.name === e.target.value
            );
            if (country) {
              setCountry(country);
              setCity(country.cities[0]);
            }
          }}
          value={selectedCountry.name}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <span className="w-max">contain</span>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setCity(e.target.value)}
          value={selectedCity}
        >
          {selectedCountry.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <span>?</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => {
            window.open(
              `https://www.google.com/search?q=Does+the+${selectedCity}+contain+${selectedCountry.name}`,
              "_blank"
            );
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Practice;
