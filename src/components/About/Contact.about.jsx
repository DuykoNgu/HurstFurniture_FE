import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to console
    console.log("Form Submission:", {
      ...formData,
      timestamp: new Date().toISOString(),
    });

    // Show success state (button color change)
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8F">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Showroom
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Experience our furniture in person and speak with our design
            consultants.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
            <form className="p-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Interest
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="What type of furniture are you looking for?"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="Tell us about your furniture needs"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-md transition-colors duration-300 font-medium text-white
                ${
                  isSubmitted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-amber-600 hover:bg-amber-700"
                }`}
              >
                {isSubmitted ? "Message Sent!" : "Schedule Consultation"}
              </button>
            </form>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Showroom Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Location</p>
                  <p className="text-gray-600">
                    456 Design District
                    <br />
                    Los Angeles, CA 90012
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-600">+1 (323) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">showroom@luxfurniture.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Hours</p>
                  <p className="text-gray-600">
                    Tuesday - Saturday: 10am - 7pm
                    <br />
                    Sunday: 11am - 6pm
                    <br />
                    Monday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
