import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Tech Titans?",
      answer:
        "Tech Titans is the Academic club at Mid-Valley International College that aims to provide a platform for students to learn and grow in the field of technology.",
    },
    {
      question: "How can I join Tech Titans?",
      answer:
        "You can join Tech Titans by filling out the membership form on our website or google forms.",
    },
    {
      question: "What events does Tech Titans organize?",
      answer:
        "We organize hackathons, workshops, tech talks, and networking events throughout the year.",
    },
    {
      question: "Are there any membership fees?",
      answer:
        "No, membership is free for all students of Mid-Valley International College.",
    },
    {
      question: "How do I get updates about upcoming events?",
      answer:
        "You can follow us on our social media platforms to get updates about upcoming events.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-green-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-zentry text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg shadow-lg p-4 border border-gray-200"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-white" />
                ) : (
                  <FiChevronDown className="text-white" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-green-100 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
