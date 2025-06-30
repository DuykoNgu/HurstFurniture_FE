import React from 'react';
import { 
  Pencil, 
  TreePine, 
  Hammer, 
  Palette, 
  PackageCheck, 
  Truck 
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Pencil className="h-8 w-8" />,
      title: "Custom Design",
      description: "We work closely with you to create the perfect design that matches your vision and space.",
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Material Selection",
      description: "We carefully select premium, sustainable materials that meet our quality standards.",
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Expert Crafting",
      description: "Our master craftsmen bring the design to life using traditional techniques and modern tools.",
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Fine Finishing",
      description: "Each piece receives meticulous attention to detail in the finishing process.",
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <PackageCheck className="h-8 w-8" />,
      title: "Quality Check",
      description: "Rigorous quality control ensures every piece meets our high standards.",
      color: 'bg-rose-100 text-rose-600'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "White Glove Delivery",
      description: "Professional delivery and installation in your home with utmost care.",
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Crafting Process
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            From design to delivery, every step is handled with precision and care to create your perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={`rounded-full p-4 inline-block ${step.color} mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;