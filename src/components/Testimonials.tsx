import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Full Stack Web Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      text: "The practical approach to learning at Vinovaa Institute helped me land my dream job. The mentors are highly skilled and supportive.",
      company: "Tech Solutions Inc.",
      role: "Software Developer"
    },
    {
      name: "Rahul Verma",
      course: "Data Science & Analytics",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      text: "Outstanding infrastructure and industry-relevant curriculum. The hands-on projects gave me real-world experience.",
      company: "Analytics Hub",
      role: "Data Analyst"
    },
    {
      name: "Sneha Patel",
      course: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      text: "The digital marketing course completely transformed my career. The practical knowledge gained here is invaluable.",
      company: "Digital Edge",
      role: "Marketing Specialist"
    }
  ];

  return (
    <section id="testimonials" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni about their journey and success after completing
            their courses at Vinovaa Institute
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.course}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">{testimonial.role}</p>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;