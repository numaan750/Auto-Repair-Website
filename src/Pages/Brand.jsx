import React, { useState } from "react";
import Footer from '../Components/Footer'
import { image, img } from "framer-motion/client";

const brandsData = [
  { name: "Agriauto industries Limited", products: 2146, category: "Performance Parts", image: "/public/Brands/Agri.jpg" },
  { name: "Atlas", products: 1873, category: "OEM Replacement", image: "/public/Brands/Atlas.jpg" },
  { name: "PCI Automotive", products: 1542, category: "Aftermarket", image: "/public/Brands/auto.jpg" },
  { name: "Baluchistan Weels Limited", products: 1234, category: "Genuine Parts", image: "/public/Brands/Baluchistan.jpg" },
  { name: "Chandhara Tyre & Rubber", products: 2189, category: "Performance Parts", image: "/public/Brands/GTR.jpg" },
  { name: "BCL", products: 967, category: "OEM Replacement", image: "/public/Brands/Bcl.jpg" },
  { name: "Loade Limited", products: 1564, category: "Aftermarket", image: "/public/Brands/Loads.jpg" },
  { name: "Master Motors Corporation Limited", products: 1432, category: "Genuine Parts", image: "/public/Brands/Master.jpg" },
  { name: "Metaline Group", products: 1132, category: "Performance Parts", image: "/public/Brands/meta.jpg" },
  { name: "Razi Sons(pvt) Limited", products: 946, category: "OEM Replacement", image: "/public/Brands/Razi.jpg" },

];

const Brand = () => {
  const [selectedSort, setSelectedSort] = useState("A-Z");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (category) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    );
  };

  const sortedBrands = [...brandsData].sort((a, b) =>
    selectedSort === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  const filteredBrands = selectedFilters.length
    ? sortedBrands.filter((brand) => selectedFilters.includes(brand.category))
    : sortedBrands;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-[#0a1826] h-32 flex justify-end items-center px-6">
        <select
          className="bg-white p-2 rounded-md"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="A-Z">Sort by: A-Z</option>
          <option value="Z-A">Sort by: Z-A</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 flex">
        {/* Filter Section */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filter Brands</h2>
          <div className="space-y-2">
            {["Performance Parts", "OEM Replacement", "Aftermarket", "Genuine Parts"].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedFilters.includes(category)}
                  onChange={() => handleFilterChange(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brands Grid */}
        <div className="w-3/4 grid grid-cols-3 gap-6 p-6">
          {filteredBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img src={brand.image} alt={brand.name} className="w-full h-60 object-cover mb-2 rounded" />
              <h3 className="text-lg text-center font-semibold mt-2">{brand.name}</h3>
              <p className="text-gray-600">{brand.products} Products</p>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Brand;
