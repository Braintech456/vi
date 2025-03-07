import React from 'react';
import { Monitor, Wifi, Database, BookOpen, Coffee, Video } from 'lucide-react';

const Infrastructure = () => {
  const facilities = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Computer Labs",
      description: "150+ high-performance computers with latest software"
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: "High-Speed Internet",
      description: "1 Gbps dedicated leased line for seamless connectivity"
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Server Room",
      description: "Advanced server infrastructure for practical training"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Digital Library",
      description: "Access to online courses and educational resources"
    },
    {
      icon: <Coffee className="h-8 w-8 text-blue-600" />,
      title: "Student Lounge",
      description: "Comfortable space for breaks and discussions"
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: "Smart Classrooms",
      description: "Interactive projectors and modern teaching aids"
    }
  ];

  return (
    <section id="infrastructure" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Our Infrastructure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience learning in our state-of-the-art facilities designed to provide
            the best educational environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80"
            alt="Modern computer lab"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Smart classroom"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;