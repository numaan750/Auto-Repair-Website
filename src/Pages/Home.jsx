import React from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import Footer from '../Components/Footer';
import SearchVehicle from '../DropDown/SearchVehicle';

const products = [
    {
        id: 1,
        name: "Engines",
        image: "/imags/Engines.jpg",
        rating: 4.5,
        price: "$120.00",
    },
    {
        id: 2,
        name: "Interior Seats",
        image: "/imags/Seats.jpg",
        rating: 4.2,
        price: "$80.00",
    },
    {
        id: 3,
        name: "Brakes",
        image: "/Brakes.jpg",
        rating: 4.8,
        price: "$60.00",
    },
    {
        id: 4,
        name: "LED Highlight Assembly",
        image: "/imags/LED.jpg",
        rating: 4.6,
        price: "$45.00",
    },
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
        <div className="flex text-yellow-500">
            {[...Array(fullStars)].map((_, index) => (
                <span key={index}>★</span>
            ))}
            {halfStar && <span>☆</span>}
        </div>
    );
};

const Home = () => {
    return (
        <div className="w-full flex flex-col min-h-screen bg-black">
            
            {/* HERO SECTION */}
            <div className="relative w-full h-[90vh] md:h-[40vw] flex-grow">
                <img
                    className="w-full h-full object-cover object-center -scale-x-100 opacity-20"
                    src="https://t3.ftcdn.net/jpg/10/43/89/78/360_F_1043897815_XJi7Of5iN7orpUGSvZQsOCW7kgB45iYX.jpg"
                    alt=""
                />
                <div className="absolute top-1/2 left-10 md:left-[10%] -translate-y-1/2 flex flex-col gap-6 w-[90%] md:w-[45%] text-left">
                    <h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Premium Auto Parts For Every Vehicles
                    </h1>
                    <p className="text-white text-base sm:text-lg font-light w-[90%] md:w-[95%]">
                        Find the perfect parts for your vehicle with our extensive collection of
                        genuine and aftermarket components.
                    </p>
                    <div className="bg-white px-6 py-6 md:px-7 md:py-8 flex flex-col gap-6 md:gap-8 rounded-2xl">
                        <h1 className="text-gray-900 font-medium text-lg md:text-xl">
                            Find Parts of your Vehicle
                        </h1>
                        <SearchVehicle />
                    </div>
                </div>
            </div>

            {/* SHOP BY CATEGORY */}
            <div className="w-full bg-white px-6 sm:px-10 md:px-20 py-14">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
                    Shop by Category
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 mt-6">
                    {[
                        { src: "/imags/Engines.jpg", label: "Car Engine" },
                        { src: "/Alloywheel.jpg", label: "Alloy Wheel" },
                        { src: "/Door.jpg", label: "Car Doors Handle" },
                        { src: "/Shocks.jpg", label: "Shock Absorber" },
                        { src: "/piston.jpg", label: "Engine Piston" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-4">
                            <img className="h-[18vh] sm:h-[20vh] object-contain" src={item.src} alt={item.label} />
                            <h1 className="text-base sm:text-lg font-semibold text-center">{item.label}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* FEATURED PRODUCTS */}
            <div className="w-full bg-white px-6 sm:px-10 md:px-20 py-14">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
                    Featured Product
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow-md flex flex-col items-center">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-3 rounded" />
                            <h3 className="text-lg font-bold text-center">{product.name}</h3>
                            <StarRating rating={product.rating} />
                            <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SERVICES */}
            <div className="w-full bg-white py-10">
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 px-6 sm:px-10 md:px-20">
                    {[
                        { icon: <FaShieldAlt />, title: "Genuine Parts", desc: "100% authentic parts from trusted manufacturers" },
                        { icon: <FaShippingFast />, title: "Fast Shipping", desc: "Free shipping on orders over $99" },
                        { icon: <MdOutlineSettingsBackupRestore />, title: "Easy Returns", desc: "30-day hassle-free return policy" },
                        { icon: <MdSupportAgent />, title: "Expert Support", desc: "Technical assistance available 24/7" },
                    ].map((item, i) => (
                        <div key={i} className="w-[45%] sm:w-[40%] md:w-1/4 flex flex-col items-center text-center">
                            <div className="bg-gray-300 p-4 rounded-full text-3xl">{item.icon}</div>
                            <h1 className="text-lg mt-3 mb-2 font-medium">{item.title}</h1>
                            <p className="text-gray-500 text-sm sm:text-base">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
