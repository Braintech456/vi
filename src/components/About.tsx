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

  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">About Vinovaa Institute</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vinovaa Institute of Technology is a premier educational institution
            dedicated to empowering students with cutting-edge technical education
            and professional development opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
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
      </div>
    </section>
  );
};

export default About;