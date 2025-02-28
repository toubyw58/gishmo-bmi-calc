"use client"

import { useState } from 'react';
import { GENERAL_FAQS } from '../../lib/constants';
import Section, { SectionHeader } from '../ui/Section';

/**
 * FAQ item component to display a single question and answer
 * @param {Object} props - Component props
 * @param {string} props.question - The question
 * @param {string} props.answer - The answer
 * @param {boolean} [props.isOpen=false] - Whether the FAQ item is open
 * @param {Function} props.toggleOpen - Function to toggle the open state
 */
function FaqItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-base text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

/**
 * FAQ section component to display frequently asked questions
 * @param {Object} props - Component props
 * @param {string} [props.title='Frequently Asked Questions'] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background='white'] - Section background color
 * @param {Array} [props.faqs] - Array of FAQ objects (defaults to constants)
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.layout='accordion'] - Layout type (accordion or grid)
 */
export default function FaqSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services',
  background = 'white',
  faqs = GENERAL_FAQS,
  className = '',
  layout = 'accordion',
}) {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <Section background={background} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      {layout === 'accordion' ? (
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        // Grid Layout
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-base text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

/**
 * Service FAQ component to display FAQs for a specific service
 * @param {Object} props - Component props
 * @param {Object} props.service - Service object
 * @param {string} [props.background='gray'] - Section background color
 * @param {string} [props.className] - Additional CSS classes
 */
export function ServiceFaq({ service, background = 'gray', className = '' }) {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle={`Common questions about our ${service.title} service`}
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="divide-y divide-gray-200">
          {service.faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
