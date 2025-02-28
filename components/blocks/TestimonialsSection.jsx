"use client"

import { useState } from 'react';
import { TESTIMONIALS } from '../../lib/constants';
import { TestimonialCard } from '../ui/Card';
import Section, { SectionHeader } from '../ui/Section';

/**
 * Testimonials section component to display testimonials in a carousel
 * @param {Object} props - Component props
 * @param {string} [props.title='What Our Clients Say'] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background='white'] - Section background color
 * @param {Array} [props.testimonials] - Array of testimonial objects (defaults to constants)
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.layout='carousel'] - Layout type (carousel or grid)
 */
export default function TestimonialsSection({
  title = 'What Our Clients Say',
  subtitle = 'Hear from businesses that have transformed their social media presence with Gishmo',
  background = 'white',
  testimonials = TESTIMONIALS,
  className = '',
  layout = 'carousel',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Handle next testimonial
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  // Handle previous testimonial
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <Section background={background} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      {layout === 'carousel' ? (
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    text={testimonial.text}
                    name={testimonial.name}
                    company={testimonial.company}
                    imageSrc={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-primary-600 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-primary-600 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      ) : (
        // Grid Layout
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              company={testimonial.company}
              imageSrc={testimonial.image}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

/**
 * Featured testimonial component to display a single prominent testimonial
 * @param {Object} props - Component props
 * @param {Object} [props.testimonial] - Testimonial object (defaults to first testimonial in constants)
 * @param {string} [props.background='primary'] - Section background color
 * @param {string} [props.className] - Additional CSS classes
 */
export function FeaturedTestimonial({
  testimonial = TESTIMONIALS[0],
  background = 'primary',
  className = '',
}) {
  return (
    <Section background={background} className={className}>
      <div className="max-w-4xl mx-auto text-center">
        <svg
          className="h-12 w-12 text-white opacity-25 mx-auto mb-6"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-2xl font-medium text-white mb-8">
          {testimonial.text}
        </p>
        <div className="flex items-center justify-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-lg font-semibold text-white">{testimonial.name}</p>
            <p className="text-white opacity-75">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
