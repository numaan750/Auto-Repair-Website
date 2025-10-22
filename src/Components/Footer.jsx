import React, { useState } from 'react'
import { FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Email:", email);
    };
    return (
        <div className='w-full h-[30vw] bg-[#0e1826] mt-auto'>
            <div className='w-full flex items-start justify-between py-20 px-15 gap-10 border-b-1 border-gray-700 '>
                <div className='w-1/4 text-white'>
                    <img src="" alt="" />
                    <h1 className='text-xl font-light'>Your trusted source for premium auto parts
                        and accessories.</h1>
                </div>
                <div className='w-1/4 flex flex-col  text-white ml-10'>
                    <h1 className='text-xl font-bold'>Quick Links</h1>
                    <div className='flex flex-col items-start gap-2 mt-4'>
                        <a className='text-lg font-light' href="">Home</a>
                        <a className='text-lg font-light' href="">Shop</a>
                        <a className='text-lg font-light' href="">Brands</a>
                        <a className='text-lg font-light' href="">About</a>
                        <a className='text-lg font-light' href="">Contact Us</a>
                    </div>
                </div>
                <div className='w-1/4 text-white'>
                    <h1 className='text-xl font-bold'>Customer Services</h1>
                    <div className='flex flex-col items-start gap-2 mt-4'>
                        <h1 className='text-lg font-light'>Shipping Policy</h1>
                        <h1 className='text-lg font-light'>Returns & Warranty</h1>
                        <h1 className='text-lg font-light'>Track Order</h1>
                        <h1 className='text-lg font-light'>Privacy Policy</h1>
                    </div>
                </div>
                <div className='w-1/4 text-white flex flex-col gap-5'>
                    <h1 className='text-xl font-bold'>NewsLetter</h1>
                    <p className='font-light text-lg'>Subscribe to receive updates and special
                        offers.</p>
                    <div>
                        <form onSubmit={handleSubmit} className="w-full max-w-md flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 p-2 rounded-l-lg border border-gray-700 focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-yellow-600 text-gray-900 font-bold px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className='flex items-center gap-7 text-xl'>
                        <FaTwitter />
                        <FaFacebookF />
                        <FaInstagram />
                        <FaGoogle />
                        <FaYoutube />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center py-10'>
                <h1 className='text-white'>© 2024 AutoParts Pro. All rights reserved.</h1>
            </div>
        </div>


    )
}

export default Footer