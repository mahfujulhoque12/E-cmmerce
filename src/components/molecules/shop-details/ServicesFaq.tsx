"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const faqData = [
  {
    question: "Services",
    answer:
      "We provide a comprehensive range of services including space planning, color consultation, furniture selection, and custom design solutions tailored to your needs.",
  },
  {
    question: "Description",
    answer:
      "To begin, simply reach out to us through our contact form or give us a call. We'll schedule an initial consultation to discuss your vision, budget, and timeline.",
  },
  {
    question: "Specifications",
    answer:
      "The timeline varies based on the scope of the project. Generally, smaller projects can take a few weeks, while larger renovations may take several months. We will provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Return Policy",
    answer:
      "Absolutely! We can incorporate your existing pieces into the new design, ensuring a cohesive look while maximizing your investment.",
  },

];

const ServicesFaq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        content.style.maxHeight =
          activeIndex === index ? `${content.scrollHeight}px` : "0px";
        content.style.transition = "max-height 0.2s ease";
      }
    });
  }, [activeIndex]);

  return (
    <section className="py-10 md:py-15">

    
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white px-6 rounded-[5px] border shadow-sm hover:shadow-md transform translate duration-300">
              <button
                className="flex justify-between items-center w-full py-4 text-left text-gray-900 font-semibold focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-black transition-transform transform" />
                ) : (
                  <ChevronDown className="text-black transition-transform transform" />
                )}
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="overflow-hidden max-h-0"
              >
                <span className="mb-4 inline-block">{faq.answer}</span>
              </div>
            </div>
          ))}
        </div>
 
    </section>
  );
};

export default ServicesFaq;
