import React, { useState } from 'react'

const SearchVehicle = () => {

    const makes = ["Toyota", "Honda", "Ford", "Nissan"];
    const models = ["Corolla", "Civic", "Mustang", "Altima"];
    const years = ["2023", "2022", "2021", "2020", "2019", "2018"];

    const VehiclePartsDropdown = () => {
        const [selectedMake, setSelectedMake] = useState("");
        const [selectedModel, setSelectedModel] = useState("");
        const [selectedYear, setSelectedYear] = useState("");
    }

    const handleSearch = () => {
        console.log("Make:", selectedMake, "Model:", selectedModel, "Year:", selectedYear);
    };


    return (
        <div className="flex items-center justify-center gap-5">
            <select
                onChange={(e) => setSelectedMake(e.target.value)}
                className="mb-2 w-full p-2 border rounded"
            >
                <option value="">Select Make</option>
                {makes.map((make) => (
                    <option key={make} value={make}>
                        {make}
                    </option>
                ))}
            </select>

            <select
                onChange={(e) => setSelectedModel(e.target.value)}
                className="mb-2 w-full p-2 border rounded"
            >
                <option value="">Select Model</option>
                {models.map((model) => (
                    <option key={model} value={model}>
                        {model}
                    </option>
                ))}
            </select>

            <select
                onChange={(e) => setSelectedYear(e.target.value)}
                className="mb-2 w-full p-2 border rounded"
            >
                <option value="">Select Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

            <button
                onClick={handleSearch}
                className="w-full px-2 py-2 bg-blue-500 -mt-2 hover:bg-blue-900 text-white rounded"
            >
                Search Parts
            </button>
        </div>
    );
};

export default SearchVehicle