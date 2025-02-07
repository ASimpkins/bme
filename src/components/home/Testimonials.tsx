import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types/testimonial';
import { TestimonialCard } from './TestimonialCard';

const testimonials: Testimonial[] = [
  {
    name: 'Nicole',
    role: 'Instagram Creator',
    image: 'https://i.ibb.co/tqRCWMF/Snapinsta-app-282120768-1067433484123638-8056689388366515947-n-1080-1.png?auto=format&fit=crop&q=80&w=200',
    quote: 'When she partnered with us, she was brand-new to the creator space. In just 30 days, we helped her launch her account and propelled her to the prestigious top 5% of creators',
    stats: '50K+ Likes Daily'
  },
  {
    name: 'Camila',
    role: 'OF Fitness Influencer',
    image: 'https://i.ibb.co/PCvnQfN/3234819755085349044-4187515849-9d9184e1-ea72-4168-a30e-ce872ef8ca7d.jpg?auto=format&fit=crop&q=80&w=200',
    quote: 'She was already an established adult creator, but we saw untapped potential. By rebranding her to emphasize exclusivity and aligning her content with her passion for fitness, we helped her stand out and her sales skyrocketed as a result.',
    stats: '1M+ Following'
  },
  {
    name: 'Stefania',
    role: 'Instagram & TikTok Creator',
    image: 'https://i.ibb.co/mJ2nv5P/FF229-A70-6-FC0-4606-86-AA-38-C45906-D4-B5-Stephania.jpg?auto=format&fit=crop&q=80&w=200',
    quote: 'By leveraging analytics, our team developed a system tailored to her needs. It required minimal effort on her part for content creation while empowering her to regain her drive, workflow, and balance in life.',
    stats: '2M+ Views Monthly'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Quote
            key={i}
            className="absolute text-gray-800/10 transform rotate-12"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Creator Success Stories
          </h2>
          <p className="text-xl text-gray-300">Growth Made Possible by Us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}