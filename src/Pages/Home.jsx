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
        image: "/public/imags/Engines.jpg",
        rating: 4.5,
        price: "$120.00",
    },
    {
        id: 2,
        name: "Interior Seats",
        image: "/public/imags/Seats.jpg",
        rating: 4.2,
        price: "$80.00",
    },
    {
        id: 3,
        name: "Brakes",
        image: "/public/Brakes.jpg",
        rating: 4.8,
        price: "$60.00",
    },
    {
        id: 4,
        name: "LED Highlight Assembly",
        image: "/public/imags/LED.jpg",
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
        <div className='w-full h-screen flex flex-col min-h-screen bg-black'>
            <div className='relative w-full h-[40vw] z-[9]  flex-grow'>
                <img className='w-full h-full object-cover object-center -scale-x-100 opacity-20  bg-no-repeat' src="https://t3.ftcdn.net/jpg/10/43/89/78/360_F_1043897815_XJi7Of5iN7orpUGSvZQsOCW7kgB45iYX.jpg" alt="" />
                <div className='w-1/2 absolute -top-[3vw] left-[30%] -translate-x-[50%] translate-y-[50%] flex flex-col gap-6'>
                    <h1 className=' leading-[3.5vw] text-5xl font-bold text-white '>Premium Auto Parts For Every Vehicles</h1>
                    <p className='text-white text-lg font-light w-[95%]'>Find the perfect parts for your vehicle with our extensive collection of
                        genuine and aftermarket components. </p>
                    <div className='bg-white px-7 py-8 flex flex-col gap-8 rounded-2xl '>
                        <h1 className='text-gray-900 font-medium text-xl'>Find Parts of your Vehicle</h1>
                        <div >
                            <SearchVehicle />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[40vw] bg-white p-20'>
                <h1 className='text-5xl font-bold '>Shop by Category</h1>
                <div className='w-full flex items-center justify-between gap-10 mt-10 overflow-hidden whitespace-nowrap '>
                    <div className='w-[40vw] flex flex-col items-center justify-center gap-10' >
                        <img className='h-[20vh]' src="/public/imags/Engines.jpg" alt="Car Engine" />
                        <h1 className='text-xl font-semibold'>Car Engine</h1>
                    </div>
                    <div className='w-[40vw] flex flex-col items-center justify-center gap-10' >
                        <img className='h-[20vh]' src="/public/Alloywheel.jpg" alt="Car Brakes" />
                        <h1 className='text-xl font-semibold'>Alloy Wheel</h1>
                    </div>
                    <div className='w-[40vw] flex flex-col items-center justify-center gap-10' >
                        <img className='h-[20vh]' src="/public/Door.jpg" alt="Electrical" />
                        <h1 className='text-xl font-semibold'>Car Doors Handle</h1>
                    </div>
                    <div className='w-[40vw] flex flex-col items-center justify-center gap-10' >
                        <img className='h-[20vh]' src="/public/Shocks.jpg" alt="Car Engine" />
                        <h1 className='text-xl font-semibold'>Shock Absorber</h1>
                    </div>
                    <div className='w-[40vw] flex flex-col items-center justify-center gap-10' >
                        <img className='h-[20vh]' src="/public/piston.jpg" alt="Car Engine" />
                        <h1 className='text-xl font-semibold'>Engine Piston</h1>
                    </div>


                </div>
            </div>
            <div className='w-full h-screen bg-white p-20'>
                <h1 className='text-5xl font-bold'>Featured Product</h1>
                <div className="flex items-center justify-between mt-30">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow-md">
                            <img src={product.image} alt={product.name} className="w-full h-70 object-cover mb-2 rounded" />
                            <h3 className="w-[18vw] text-lg font-bold">{product.name}</h3>
                            <StarRating rating={product.rating} />
                            <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className='w-full h-[10vw] bg-white '>
                <div className='w-full h-[70%]  flex items-center justify-between px-40' >
                    <div className='w-1/4 flex flex-col items-center '>
                        <div className="icon bg-gray-300 px-3 py-3 rounded-full text-3xl"><FaShieldAlt /></div>
                        <h1 className='text-lg mt-2 mb-2 font-medium'>Genuine Parts</h1>
                        <p className='text-center font-light text-gray-500'>100% authentic parts from trusted manufacturers</p>
                    </div>
                    <div className='w-1/4 flex flex-col items-center '>
                        <div className="icon bg-gray-300 px-3 py-3 rounded-full text-3xl"><FaShippingFast /></div>
                        <h1 className='text-lg mt-2 mb-2 font-medium'>Fast Shipping</h1>
                        <p className='text-center font-light text-gray-500'>Free shipping on orders over $99</p>
                    </div>
                    <div className='w-1/4 flex flex-col items-center '>
                        <div className="icon bg-gray-300 px-3 py-3 rounded-full text-3xl"><MdOutlineSettingsBackupRestore /></div>
                        <h1 className='text-lg mt-2 mb-2 font-medium'>Easy Returns</h1>
                        <p className='text-center font-light text-gray-500'>30-day hassle-free return policy</p>
                    </div>
                    <div className='w-1/4 flex flex-col items-center '>
                        <div className="icon bg-gray-300 px-3 py-3 rounded-full text-3xl"><MdSupportAgent /></div>
                        <h1 className='text-lg mt-2 mb-2 font-medium'>Expert Support</h1>
                        <p className='text-center font-light text-gray-500'>Technical assistance available 24/7</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home