import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import FAQs from '../Components/FAQs'
import Footer from "../Components/Footer";




const ContactUs = () => {



  const services = [
    {
      icon: <IoMdCall size={40} />,
      title: "Phone Support",
      description: "Available 24/7",
      contact: "1-800-AUTO-PART",
    },
    {
      icon: <IoIosMail size={40} />,
      title: "Email Support",
      description: "Response within 24 hours",
      contact: "support@autoparts.com",
    },
    {
      icon: <IoIosChatbubbles size={40} />,
      title: "Live Chat",
      description: "Instant assistance",
      contact: "Chat with us now",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full h-screen text-white ">
      <div
        className="w-[100%] px-10 py-10 flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1740&auto=format&fit=crop')",
        }}
      >
        <div className="w-1/2 p-10">
          <h1 className="text-4xl font-bold mb-2">Contact Our Support Team</h1>
          <h2 className="text-lg text-gray-400 mb-6">
            We're here to help with all your auto parts needs
          </h2>
          <div className="bg-white p-6 rounded-xl text-black">
            <h3 className="text-xl text-blue-500 font-bold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-400 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-400 rounded-lg"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-400 rounded-lg"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full"
              >
                Send Message
              </button>
            </form>
            {showNotification && (
              <div className="mt-4 text-green-500 font-bold">Message Sent!</div>
            )}
          </div>
        </div>

        <div className="w-1/2 p-4">
          <img
            src="/public/Contact.png"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="bg-gray-100 py-30">
        <h2 className="text-5xl font-bold text-center  text-blue-500 mb-12">
          Our Support Services
        </h2>
        <div className="flex  items-center justify-between gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md flex flex-col items-center rounded-lg p-10 text-center w-full max-w-xs"
            >
              <div className="text-black text-5xl mb-5">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-black">{service.title}</h3>
              <p className="text-gray-500 text-xl">{service.description}</p>
              <p className="text-blue-500 mt-2 text-xl">{service.contact}</p>
            </div>
          ))}
        </div>
      </div>
      <FAQs />
      <Footer />
    </div>
  );
};

export default ContactUs;