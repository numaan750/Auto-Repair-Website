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
        <div className="bg-gray-100 py-12 px-4">
            <h2 className="text-blue-500 text-5xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-blue-500 p-4 shadow-md rounded-md cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">{faq.question}</h3>
                            {openIndex === index ? (
                                <FaChevronUp className="transition-transform transform rotate-180" />
                            ) : (
                                <FaChevronDown className="transition-transform" />
                            )}
                        </div>
                        {openIndex === index && (
                            <p className="text-white mt-2">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;