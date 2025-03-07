import React from 'react';
import { CheckCircle } from 'lucide-react';

const NTACenter = () => {
  const exams = [
    "JEE (Main & Advanced)",
    "NEET",
    "UGC NET",
    "CUET",
    "CMAT",
    "GPAT"
  ];

  return (
    <section id="nta" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">NTA Examination Center</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to be an authorized National Testing Agency (NTA) examination center,
            facilitating various national-level entrance examinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80"
              alt="Students taking exam"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="heading-secondary">Examinations Conducted</h3>
            <div className="grid grid-cols-1 gap-4">
              {exams.map((exam, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-800">{exam}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Facility Features:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• State-of-the-art computer labs</li>
                <li>• High-speed internet connectivity</li>
                <li>• Backup power supply</li>
                <li>• CCTV surveillance</li>
                <li>• Trained invigilators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NTACenter;