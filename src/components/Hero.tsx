import React, { useRef } from 'react';

const Hero = ({ scrollToCourses }) => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      alt: "Students in computer lab"
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      alt: "Classroom training"
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      alt: "Certification ceremony"
    }
  ];

  return (
    <section id="home" className="pt-16">
      <div className="relative h-[600px] overflow-hidden">
        {/* Hero Images */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full"
                style={{
                  animation: `fadeInOut ${slides.length * 5}s linear infinite ${
                    index * 5
                  }s`
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative section-container h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shape Your Future with Excellence
            </h1>
            <p className="text-xl mb-8">
              Empowering students with cutting-edge technology education and
              professional development at Vinovaa Institute of Technology
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary" onClick={scrollToCourses}>
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-8">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">150+</div>
              <div className="mt-2">Computers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1000+</div>
              <div className="mt-2">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold">98%</div>
              <div className="mt-2">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0%, 33% { opacity: 1; }
          50% { opacity: 0; }
          83%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
