import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I return a part?",
      answer:
        "You can initiate a return within 30 days of purchase through your account or by contacting our support team.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "Most parts come with a 12-month warranty. Specific warranty information is listed on each product page.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries. Shipping rates and delivery times vary by location.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10 sm:py-16 px-4 sm:px-8">
      <h2 className="text-blue-500 text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="bg-blue-500 text-white p-4 sm:p-6 rounded-md shadow-md cursor-pointer transition-all duration-300 hover:bg-blue-600"
          >
            <div className="flex justify-between items-center gap-3">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaChevronUp className="transition-transform duration-300 transform rotate-180 text-sm sm:text-base" />
              ) : (
                <FaChevronDown className="transition-transform duration-300 text-sm sm:text-base" />
              )}
            </div>

            {openIndex === index && (
              <p className="text-gray-100 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
