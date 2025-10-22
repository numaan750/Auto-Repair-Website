import React, { useState } from "react";
import Footer from "../Components/Footer";

const brandsData = [
  { name: "Agriauto Industries Limited", products: 2146, category: "Performance Parts", image: "/Brands/Agri.jpg" },
  { name: "Atlas", products: 1873, category: "OEM Replacement", image: "/Brands/Atlas.jpg" },
  { name: "PCI Automotive", products: 1542, category: "Aftermarket", image: "/Brands/auto.jpg" },
  { name: "Baluchistan Wheels Limited", products: 1234, category: "Genuine Parts", image: "/Brands/Baluchistan.jpg" },
  { name: "Chandhara Tyre & Rubber", products: 2189, category: "Performance Parts", image: "/Brands/GTR.jpg" },
  { name: "BCL", products: 967, category: "OEM Replacement", image: "/Brands/Bcl.jpg" },
  { name: "Loads Limited", products: 1564, category: "Aftermarket", image: "/Brands/Loads.jpg" },
  { name: "Master Motors Corporation Limited", products: 1432, category: "Genuine Parts", image: "/Brands/Master.jpg" },
  { name: "Metaline Group", products: 1132, category: "Performance Parts", image: "/Brands/meta.jpg" },
  { name: "Razi Sons (Pvt) Limited", products: 946, category: "OEM Replacement", image: "/Brands/Razi.jpg" },
];

const Brand = () => {
  const [selectedSort, setSelectedSort] = useState("A-Z");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <div className="bg-[#0a1826] h-20 flex flex-wrap justify-between items-center px-6 sm:px-10">
        <h1 className="text-white text-xl sm:text-2xl font-semibold">Our Brands</h1>
        <div className="flex items-center gap-4">
          {/* Filter Toggle (Mobile Only) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-white bg-blue-600 px-4 py-2 rounded-md sm:hidden"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          <select
            className="bg-white p-2 rounded-md text-gray-700"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option value="A-Z">Sort by: A-Z</option>
            <option value="Z-A">Sort by: Z-A</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row flex-1 container mx-auto p-4 sm:p-6 gap-6">
        {/* Filter Section */}
        <div
          className={`bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 transition-all duration-300 ${
            showFilters ? "block" : "hidden sm:block"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter Brands</h2>
          <div className="space-y-2">
            {["Performance Parts", "OEM Replacement", "Aftermarket", "Genuine Parts"].map((category) => (
              <label key={category} className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox accent-blue-600"
                  checked={selectedFilters.includes(category)}
                  onChange={() => handleFilterChange(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brands Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{brand.name}</h3>
              <p className="text-gray-500 text-sm sm:text-base">{brand.products} Products</p>
              <span className="mt-2 text-sm text-blue-500 font-medium">{brand.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Brand;
