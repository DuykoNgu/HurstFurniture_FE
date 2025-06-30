import { Leaf, Shield, Recycle } from "lucide-react";
import React from "react";

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We believe in creating furniture that not only beautifies your space
            but also respects our environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-amber-50 rounded-xl p-8 transform transition duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white mb-5">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sustainable Materials
            </h3>
            <p className="text-gray-600">
              We source only the finest sustainable materials, ensuring each
              piece is both beautiful and environmentally responsible.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-8 transform transition duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-5">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Quality Guarantee
            </h3>
            <p className="text-gray-600">
              Every piece comes with our lifetime craftsmanship guarantee,
              reflecting our confidence in our quality standards.
            </p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-8 transform transition duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mb-5">
              <Recycle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              Our manufacturing process prioritizes renewable energy and minimal
              waste, supporting a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
