import React from "react";
import { teamMembers } from "../../data/demodata3";
import { Twitter, Linkedin, Mail } from "lucide-react";

const Team = () => {
  return (
    <section className="y-20 pbg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Artisans
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet the skilled craftspeople and designers behind our beautiful
            furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              className="bg-white rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:-translate-y-2"
              key={index}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full
               h-64 object-cover object-center"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-amber-600 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-amber-600 transition-colors duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-amber-600 transition-colors duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
