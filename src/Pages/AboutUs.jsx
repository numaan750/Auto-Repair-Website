import React from "react";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-black flex flex-col">
        {/* ---------- Hero Section ---------- */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <img
            className="w-full h-full object-cover opacity-40"
            src="/About.jpg"
            alt="About"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-2">
              About Us
            </h1>
            <h2 className="text-white font-light text-lg sm:text-xl md:text-2xl max-w-2xl">
              Your Trusted Partner in Quality Spare Parts
            </h2>
          </div>
        </div>

        {/* ---------- Our Story ---------- */}
        <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-16 gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-8">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl font-light mb-6 leading-relaxed text-gray-800">
              Founded in 1995, AutoParts Pro has grown from a small local shop
              to one of the nation's leading auto parts retailers. Our
              commitment to quality, expertise, and customer satisfaction has
              remained unchanged throughout our journey.
            </p>
            <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-800">
              We pride ourselves on offering premium auto parts from trusted
              manufacturers, ensuring every vehicle gets the quality components
              it deserves. Our team of experts is dedicated to helping you find
              the right parts for your specific needs.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full sm:w-[80%] h-[300px] sm:h-[400px] object-cover rounded-xl shadow-lg"
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1740&auto=format&fit=crop"
              alt="Auto Parts"
            />
          </div>
        </section>

        {/* ---------- Mission & Vision ---------- */}
        <section className="w-full bg-gray-100 py-16 flex flex-col items-center text-center px-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl">
            {[
              {
                title: "Our Mission",
                text: "To provide top-quality auto parts with unbeatable service and reliability.",
              },
              {
                title: "Our Vision",
                text: "To be the most trusted auto parts provider worldwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-8 sm:p-10 rounded-xl w-full sm:w-[45%] md:w-[40%]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-blue-500">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg font-light text-gray-700">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ---------- Why Choose Us ---------- */}
          <motion.h3
            className="text-4xl sm:text-5xl font-bold mt-16 mb-10 text-blue-500"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Why Choose Us?
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl">
            {[
              {
                title: "Quality Assurance",
                text: "We ensure all our parts meet industry standards for reliability and performance.",
              },
              {
                title: "Fast Shipping",
                text: "Get your orders delivered quickly with our trusted logistics partners.",
              },
              {
                title: "Customer Support",
                text: "Our team is always available to assist you with any inquiries.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-8 sm:p-10 rounded-xl w-full sm:w-[45%] md:w-[30%]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ---------- Meet Our Team ---------- */}
          <motion.h3
            className="text-4xl sm:text-5xl font-bold mt-20 mb-10 text-blue-500 text-center"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            Meet Our Team
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-6">
            {[
              {
                name: "Numaan Ali",
                role: "Founder & CEO",
                img: "/Profile.jpg",
                desc: "Leading AutoParts Pro with a passion for innovation and customer trust.",
              },
              {
                name: "Sarah Khan",
                role: "Marketing Head",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                desc: "Building strong brand connections and driving growth strategies.",
              },
              {
                name: "Ahmed Raza",
                role: "Lead Engineer",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
                desc: "Ensuring every auto part meets the highest performance standards.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-[45%] md:w-[28%] text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-2">{member.role}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------- Stats Section ---------- */}
        <section className="w-full bg-white flex flex-wrap justify-center items-center gap-10 sm:gap-16 py-16">
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "100K+", label: "Parts Available" },
            { number: "500+", label: "Brands" },
            { number: "28", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h1 className="font-bold text-3xl sm:text-4xl text-blue-600">
                {stat.number}
              </h1>
              <h2 className="text-base sm:text-lg text-gray-500">
                {stat.label}
              </h2>
            </motion.div>
          ))}
        </section>

        {/* ---------- Footer ---------- */}
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
