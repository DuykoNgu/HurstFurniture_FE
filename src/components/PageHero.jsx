import React from "react";

const PageHero = ({
  title = "",
  description,
  className = "py-20",
  textColor = "text-white",
  bgColor = "bg-black",
}) => {
  return (
    <section className={`${bgColor} ${textColor} ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className={`${textColor}/90 max-w-2xl mx-auto`}>{description}</p>
      </div>
    </section>
  );
};

export default PageHero;
