import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What is SS Coin (SSC)?",
    answer:
      "SS Coin (SSC) is a BEP-20 token designed to provide long-term ecosystem growth, liquidity, and community incentives.",
  },
  {
    question: "What blockchain does SSC run on?",
    answer: "SSC runs on the Binance Smart Chain (BEP-20).",
  },
  {
    question: "What is the total supply of SSC?",
    answer: "The total supply of SSC is 24,000,000 tokens.",
  },
  {
    question: "What is the token price during the ICO?",
    answer: "The ICO price will be announced officially on launch.",
  },
  {
    question: "How can I buy SSC?",
    answer:
      "You can purchase SSC through the official ICO website or supported exchanges after listing.",
  },
  {
    question: "What can I use SSC for?",
    answer:
      "SSC can be used for staking, ecosystem rewards, transactions, and other utilities within the ecosystem.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 md:py-14">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2
          className="
          text-center
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-normal
                  bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]
                  bg-clip-text
                  text-transparent
          "
        >
          Frequently Asked Questions
        </h2>

        <p className="text-center text-[#D8D8D8] font-['Poppins'] text-sm font-[400] mt-3 md:mt-5 max-w-3xl mx-auto">
          Find answers to the most common questions about SS Coin, our
          ecosystem, and how to get started.
        </p>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
              rounded-xl
              border
              border-[#FFFFFF1A]
              bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_100%)]
              overflow-hidden
              transition-all
              duration-300
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                w-full
                flex
                items-center
                justify-between
                px-5
                py-5
                text-left
                "
              >
                <span className="text-white font-['Inter']  text-sm sm:text-base font-medium">
                  {faq.question}
                </span>

                <FiChevronDown
                  className={`text-[#FDC700] text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                transition-all duration-300 overflow-hidden
                ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }
                `}
              >
                <div className="px-5 pb-5 text-[#BDBDBD] text-sm leading-7">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}