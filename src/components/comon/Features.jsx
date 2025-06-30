import React from "react";
import { TruckIcon, CreditCard, RotateCcw, HeadphonesIcon } from "lucide-react";
const Features = () => {
  const features = [
    {
      icon: <TruckIcon className="h-8 w-8 text-amber-600" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $100",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-amber-600" />,
      title: "Secure Payment",
      description: "We ensure secure payment with PCI DSS",
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-amber-600" />,
      title: "30 Days Return",
      description: "Simply return it within 30 days for an exchange",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-amber-600" />,
      title: "24/7 Support",
      description: "Contact us 24 hours a day, 7 days a week",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

// itss done
