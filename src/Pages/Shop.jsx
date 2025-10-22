import React, { useState, useEffect } from "react";
import { FaList, FaTh } from "react-icons/fa";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Car Door Handle",
    image: "/public/Door.jpg",
    rating: 4.5,
    price: 5 ,
    description: "This is a high-quality air filter that helps to improve engine performance and efficiency."
  },
  {
    id: 2,
    name: "Brake Pads",
    image: "/public/Brakes.jpg",
    rating: 4.5,
    price: 49.99,
    description: "Durable and long-lasting brake pads for safer and smoother stops."
  },
  {
    id: 3,
    name: "Engine Oil",
    image: "/public/Oil.jpg",
    rating: 4.8,
    price: 19.99,
    description: "Top-grade engine oil that keeps your engine clean and lubricated."
  },

  {
    id: 4,
    name: "Tire",
    image: "/public/tire.jpg",
    rating: 4.8,
    price: 160,
    description: "All-season tire designed for improved traction and handling in dry, wet, and snowy conditions. Excellent tread pattern for year-round performance."
  },
  {
    id: 5,
    name: "Rim / Alloy Wheel",
    image: "/public/Alloywheel.jpg",
    rating: 4.8,
    price: 220,
    description: "High-performance chrome alloy wheel with a sharp multi-spoke design. Lightweight and built for enhanced driving dynamics and aesthetics."
  },
  {
    id: 6,
    name: "Side Mirror",
    image: "/public/Sidemirror.jpg",
    rating: 4.8,
    price: 35,
    description: "Standard black side mirror compatible with most sedan models. Manual adjustment, durable housing, easy to install."
  },
  {
    id: 7,
    name: "Tail Lights (Backlights)",
    image: "/public/Lights.jpg",
    rating: 4.6,
    price: 89.99,
    description: "Stylish LED tail lights designed for enhanced visibility and safety, featuring a modern sleek red-and-clear lens design."
  },
  {
    id: 8,
    name: "Rear Shock Absorber",
    image: "/public/Shocks.jpg",
    rating: 4.8,
    price: 129.99,
    description: "High-performance adjustable rear shock absorber with coil spring for superior ride comfort and stability."
  },
  {
    id: 9,
    name: "Performance Air Filter",
    image: "/public/CarbonFilter.jpg",
    rating: 4.7,
    price: 39.99,
    description: "Washable and reusable high-flow air filter designed to boost engine airflow, horsepower, and fuel efficiency."
  },
  {
    id: 10,
    name: "Car Headlight Assembly",
    image: "/public/Headlights.jpg",
    rating: 4.7,
    price: 30,
    description: "This is a modern halogen or projector headlight assembly, which is installed at the front of the car and is essential for night driving."
  },
  {
    id: 11,
    name: "Piston and Connecting Rod",
    image: "/public/pistons.jpg",
    rating: 4.7,
    price: 20,
    description: "The engine's core rotating component that converts the piston's linear motion into rotary motion. This is the complete piston and crankshaft assembly."
  },
  {
    id: 12,
    name: "Racing Steering Wheel (Momo Style)",
    image: "/public/staring.jpg",
    rating: 4.7,
    price: 60,
    description: "This is a high-performance, leather-wrapped racing steering wheel, commonly used in lightweight and sports car builds. It's a popular model from the renowned motorsport brand MOMO."
  },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductGrid = ({ products }) => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full md:w-4/4 p-6 ">
      <h1 className="text-2xl font-bold mb-5">Products List : </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-4 rounded-lg hover:shadow-2xl   transition-all">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover   rounded"
              />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-gray-700 font-semibold mt-1">${product.price.toFixed(2)}</p>

              {/* Description Toggle */}
              {expanded[product.id] && (
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
              )}
              <button
                onClick={() => toggleDescription(product.id)}
                className="text-blue-600 text-sm mt-1 hover:underline"
              >
                {expanded[product.id] ? "Show Less" : "Show More"}
              </button>

              <button className="bg-black text-white w-full py-2 mt-3 rounded">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-xl col-span-3">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState(initialProducts);
  const query = useQuery().get("search");

  useEffect(() => {
    if (query) {
      const filteredProducts = initialProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(initialProducts);
    }
  }, [query]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="w-full h-[40vh] bg-[#0a1826] text-white p-20 flex justify-between items-start">
        <h1 className="text-6xl font-bold">Product Listings</h1>
      </div>
      <div className="flex flex-col md:flex-row p-6 gap-4">
        <ProductGrid products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
