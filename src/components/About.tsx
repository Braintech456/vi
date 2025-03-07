import React from 'react';
import { Award, Users, Monitor, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Certified Programs",
      description: "Industry-recognized certifications and courses"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Faculty",
      description: "Learn from experienced industry professionals"
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art computer labs and classrooms"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Practical Learning",
      description: "Hands-on training with real-world projects"
    }
  ];

  

  const testimonials = [
    {
      name: "Varad Neve",
      feedback: "Vinovaa Institute provided me with the skills and knowledge I needed to excel in my career. The faculty is incredibly supportive!"
    },
    {
      name: "Karan Sharma",
      feedback: "The hands-on training and real-world projects made all the difference. I felt prepared for the job market."
    }
  ];

  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">About Vinovaa Institute of Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vinovaa Institute of Technology is a premier educational institution
            dedicated to empowering students with cutting-edge technical education
            and professional development opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://media-hosting.imagekit.io//1c0a64bd006840ee/gettyimages-1429680603-612x612.jpg?Expires=1835973877&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HDz0Ba8qGV0dfRkNK4EGET~cVLHZEKSy4oQs32MKuUduBt-maTyETLV4gMjLKqd3hTVldLP5PxgDkWmSkp2tY-ALD3Ky343xrHjzzyq5mjTjc4I98jidStKoU9eHRNahw1tzmwPot119RfFZKNLUAoCYkVoaEXZeGKHPH9Mxmr46Z2aZjaLt9K0hc2NrQL6fP108JwF40oyHE5m~WqoJyW3qA1HPw0L~MiTj8UySDVIMg-ed9-6HAODY6k0e7MM~6YLO4ySv45vq6NJe8H~M8mdhrNxgM1N7TqQWK~2tbveDGh6WxHU81OWfxDAxnSa-XBXQt1GziGKJrnhTQjIp-A__"
              alt="Students collaborating"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="heading-secondary">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be the leading institute in technical education, fostering
              innovation, excellence, and professional growth through
              industry-aligned training programs and state-of-the-art
              infrastructure.
            </p>
            
            <h3 className="heading-secondary">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide quality education and practical training that prepares
              students for successful careers in technology, commerce, and
              management sectors while maintaining the highest standards of
              academic excellence.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        
        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="heading-secondary text-center mb-6">What Our Students Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                <p className="text-right font-semibold mt-4">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations Section */}
        <div className="mt-16 text-center">
          <h3 className="heading-secondary mb-6">Accreditations & Partnerships</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are proud to be accredited by various educational bodies and have partnerships with leading industry organizations to ensure our programs meet the highest standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
