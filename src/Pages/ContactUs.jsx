import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import FAQs from "../Components/FAQs";
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
    <div className="w-full min-h-screen text-white flex flex-col">
      {/* ---------- HERO / CONTACT SECTION ---------- */}
      <div
        className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 px-6 sm:px-10 py-10 lg:py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1740&auto=format&fit=crop')",
        }}
      >
        {/* ---------- FORM SECTION ---------- */}
        <div className="w-full lg:w-1/2 bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl text-black shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#0a1826]">
            Contact Our Support Team
          </h1>
          <h2 className="text-base sm:text-lg text-gray-600 mb-6">
            We're here to help with all your auto parts needs
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-400 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-[#0a1826] transition w-full"
            >
              Send Message
            </button>
          </form>

          {showNotification && (
            <div className="mt-4 text-green-600 font-semibold text-center">
              ✅ Message Sent Successfully!
            </div>
          )}
        </div>

        {/* ---------- IMAGE SECTION ---------- */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/Contact.png"
            alt="Contact Us"
            className="w-full max-w-lg h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* ---------- SERVICES SECTION ---------- */}
      <div className="bg-gray-100 py-16 px-6 sm:px-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-blue-600 mb-12">
          Our Support Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-500 text-base">{service.description}</p>
              <p className="text-blue-500 mt-2 font-medium">{service.contact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- FAQ & FOOTER ---------- */}
      <FAQs />
      <Footer />
    </div>
  );
};

export default ContactUs;
