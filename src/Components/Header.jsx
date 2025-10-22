import React from 'react';
import SearchBar from './SearchBar';
import { FaCartShopping, FaUserLarge } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <div className='w-full bg-white p-4 shadow-lg flex items-center justify-between px-10 backdrop-blur-md'>
            <div className="w-full h-full navbar flex items-center">
                <div className='w-1/2  gap-15 flex items-center'>
                    <img className='w-[9vw] h-[9vh] rounded-full' src="/public/Logo/Logo.svg" alt="Auto Essential SpareParts " />
                    <Link to="/" className="text-[#0a1826] font-bold hover:text-blue-900">Home</Link>
                    <Link to="/Shop" className="text-[#0a1826] font-bold hover:text-blue-900">Shop</Link>
                    <Link to="/Brand" className="text-[#0a1826] font-bold hover:text-blue-900">Brand</Link>
                    <Link to="/AboutUs" className="text-[#0a1826] font-bold hover:text-blue-900">About Us</Link>
                    <Link to="/ContactUs" className="text-[#0a1826] font-bold hover:text-blue-900">Contact Us</Link>
                </div>
                <div className='w-1/2 flex gap-8 justify-center items-center'>
                    <SearchBar />
                    <FaCartShopping className='text-3xl text-[#0a1826] hover:text-blue-900' />

                    {/* ✅ Agar user logged in hai to Profile par le jaye, warna Login page par */}
                    <Link to={currentUser ? "/login" : "/SignUp"}>
                        <FaUserLarge className="text-3xl text-[#0a1826] hover:text-blue-900 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
