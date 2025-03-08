import React from 'react';
import { Clock, Users } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      category: "Computer Software",
      courses: [
        {
          name: "Full Stack Web Development",
          duration: "6 months",
          eligibility: "10+2 with basic computer knowledge",
          fee: "₹45,000",
          topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Management"]
        },
        {
          name: "Data Science & Analytics",
          duration: "4 months",
          eligibility: "Graduate in any stream",
          fee: "₹35,000",
          topics: ["Python", "Statistics", "Machine Learning", "Data Visualization"]
        },
        {
          name: "Mobile App Development",
          duration: "5 months",
          eligibility: "10+2 with basic computer knowledge",
          fee: "₹40,000",
          topics: ["Flutter", "Dart", "Firebase", "UI/UX Design"]
        }
      ]
    },
    {
      category: "Commerce",
      courses: [
        {
          name: "Advanced Tally with GST",
          duration: "3 months",
          eligibility: "10+2 in Commerce",
          fee: "₹15,000",
          topics: ["Tally Prime", "GST", "Banking", "Inventory Management"]
        },
        {
          name: "Financial Accounting",
          duration: "4 months",
          eligibility: "10+2 in Commerce",
          fee: "₹20,000",
          topics: ["Basic Accounting Principles", "Financial Statements", "Cost Accounting", "Taxation"]
        }
      ]
    },
    {
      category: "Management",
      courses: [
        {
          name: "Digital Marketing",
          duration: "4 months",
          eligibility: "Graduate in any stream",
          fee: "₹25,000",
          topics: ["SEO", "Social Media Marketing", "Content Marketing", "Email Marketing"]
        },
        {
          name: "Project Management",
          duration: "5 months",
          eligibility: "Graduate in any stream",
          fee: "₹30,000",
          topics: ["Agile Methodology", "Risk Management", "Project Planning", "Team Leadership"]
        }
      ]
    }
  ];

  return (
    <section id="courses" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our industry-aligned courses designed to prepare you for a successful career
          </p>
        </div>

        <div className="space-y-16">
          {courses.map((category, index) => (
            <div key={index}>
              <h3 className="heading-secondary text-blue-600 mb-8">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-blue-50 p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{course.eligibility}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Topics:</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {course.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <div className="text-xl font-bold text-blue-600">{course.fee}</div>
                        <button className="btn-primary">
                         <a href="/contact" className="text-white">Enroll Now</a>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
