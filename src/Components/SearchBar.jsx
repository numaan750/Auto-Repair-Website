import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const autoParts = [
    "Brake Pads", "Air Filter", "Oil Filter", "Spark Plug", "Battery",
    "Radiator", "Headlight", "Alternator", "Clutch", "Fuel Pump"
  ];

  const filteredParts = autoParts.filter(part =>
    part.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/shop?search=${query}`);
    }
  };

  const handleSelectVehicle = () => {
    navigate(`/shop?search=${query}`);
  };

  return (
    <div className="relative w-full max-w-md flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
      {/* Input */}
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search auto parts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 sm:p-3 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Suggestions Dropdown */}
        {query && filteredParts.length > 0 && (
          <ul className="absolute left-0 top-[45px] sm:top-[50px] w-full bg-white p-2 rounded-md shadow-md z-50 max-h-52 overflow-y-auto">
            {filteredParts.map((part, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer text-sm sm:text-base"
                onClick={() => setQuery(part)}
              >
                {part}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Button */}
      <button
        onClick={handleSelectVehicle}
        className="w-full sm:w-auto p-2.5 sm:px-4 bg-[#0a1826] hover:bg-blue-900 text-white rounded-md flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
      >
        <FaCar className="text-lg sm:text-xl" />
        Select Parts
      </button>
    </div>
  );
};

export default SearchBar;
