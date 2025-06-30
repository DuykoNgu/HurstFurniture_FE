import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/demodata2";

const Authors = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Stories
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Hear from our valued customers about their experience with our
            furniture and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonials, index) => (
            <div
              className="bg-white rounded-xl p-8 shadow-md transform transition duration-500 hover:-translate-y-2"
              key={index}
            >
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonials.quote}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonials.image}
                  alt={testimonials.author}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />

                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;
