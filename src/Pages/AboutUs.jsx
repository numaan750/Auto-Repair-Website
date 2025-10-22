import React from "react";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";



const AboutUs = () => {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className=" relative w-full h-[30vw]">
          <img
            className="w-full h-full object-cover opacity-30"
            src="/About.jpg"
            alt=""
          />
          <div className="flex flex-col gap-3 absolute top-1/2 left-[20%] -translate-x-[50%] -translate-y-[50%]">
            <h1 className=" text-8xl text-white font-bold ">About us</h1>
            <h2 className="text-white font-light text-2xl -m-l-3 ">
              Your Trusted Partner in Quality Spare parts
            </h2>
          </div>
        </div>
        <div className="w-full h-screen flex items-center pt-[10vw] px-[5vw] bg-white  ">
          <div className="w-[70%] h-full flex-col ">
            <h1 className="text-5xl font-bold text-blue-500 mx-5 my-12 ">
              Our Story
            </h1>
            <h2 className="text-xl mx-5 my-7 w-[80%] leading-none space-y-4">
              <p className="text-xl font-light">
                Founded in 1995, AutoParts Pro has grown from a small local shop
                to one of the nation's leading auto parts retailers. Our
                commitment to quality, expertise, and customer satisfaction has
                remained unchanged throughout our journey.
              </p>
              <p className="text-xl font-light">
                We pride ourselves on offering premium auto parts from trusted
                manufacturers, ensuring every vehicle gets the quality
                components it deserves. Our team of experts is dedicated to
                helping you find the right parts for your specific needs.
              </p>
            </h2>
          </div>
          <div className="w-[60vw] h-full p-7">
            <img
              className="w-full h-[30vw] object-center object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Auto Parts"
            />
          </div>
        </div>
        <div className="w-full h-screen mb-[60vw]">
          <section className="w-full py-20 px-6 bg-gray-100 text-gray-900 flex flex-col items-center text-center">
            {/* Mission & Vision */}
            <div className="flex flex-wrap justify-center gap-8 mt-6 max-w-5xl">
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
                  className="bg-white shadow-lg p-15 rounded-lg w-100 text-center mb-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 * index }}
                >
                  <h3 className="text-4xl font-semibold mb-2 text-blue-500">{item.title}</h3>
                  <p className="text-xl font-light">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.h3 className="text-5xl font-bold mt-12 text-blue-500 mb-20">Why Choose Us?</motion.h3>
            <div className="flex flex-wrap justify-center gap-8 mt-6 max-w-5xl mb-20">
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
                  className="bg-white shadow-lg p-15 rounded-lg w-100 text-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 * index }}
                >
                  <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Team Introduction */}
            <motion.h3 className="text-5xl font-bold text-blue-500 ">Meet Our Team</motion.h3>
            <div className="flex flex-wrap justify-center gap-8 mt-10 max-w-5xl">
              {[
                { name: "Numaan ali", role: "Founder & CEO", img: "/Profile.jpg" },
                //   { name: "Mike Johnson", role: "Lead Engineer", img: "/mike.jpg" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-lg w-80 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
        <div className="w-full bg-white flex items-center justify-center mb-20">
          <div className="flex justify-between px-15 py-15 w-[97%] items-center bg-gray-100 rounded-2xl">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-4xl ">50K+</h1>
              <h2 className="text-xl text-gray-500">Happy Customer</h2>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-4xl ">100K+</h1>
              <h2 className="text-xl text-gray-500">Parts Avilable</h2>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-4xl ">500+</h1>
              <h1 className="text-xl text-gray-500">Brends</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-4xl ">28</h1>
              <h2 className="text-xl text-gray-500">Years Experience</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;