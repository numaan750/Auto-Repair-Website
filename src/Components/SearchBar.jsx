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
        <div className="relative w-full max-w-md flex  items-center gap-4 justify-center">
            <input
                type="text"
                placeholder="Search auto parts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {query && filteredParts.length > 0 && (
                <ul className="absolute left-0 top-[50px] w-full bg-white p-2 rounded-md shadow-md z-50">
                    {filteredParts.map((part, index) => (
                        <li key={index} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
                            onClick={() => setQuery(part)}>
                            {part}
                        </li>
                    ))}
                </ul>
            )}

            <button
                onClick={handleSelectVehicle}
                className=" p-2.5 bg-[#0a1826] hover:bg-blue-900 text-white rounded-md w-full flex items-center justify-center gap-4"><FaCar className='text-xl ' />
                Select Parts
            </button>


        </div>
    );
};

export default SearchBar;
