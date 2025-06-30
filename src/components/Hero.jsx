import React from "react";
import Button from "./comon/Button";
import PropTypes from "prop-types";

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage = "",
  showCollectionText = true,
  showButtons = true,
  buttons = [],
  onButtonClick,
}) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto absolute inset-0 z-20 flex flex-col justify-center px-4">
        <div className="max-w-xl space-y-4">
          {subtitle && (
            <p
              className="text-lg md:text-xl uppercase tracking-widest text-white/90 animate-fadeDown opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {subtitle}
            </p>
          )}
          <h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fadeDown opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {title}{" "}
            {showCollectionText && (
              <span className="text-amber-500">Collection</span>
            )}
          </h1>
          {description && (
            <p
              className="text-xl text-white/90 animate-fadeDown opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              {description}
            </p>
          )}
          {showButtons && buttons.length > 0 && (
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeUp opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant || "primary"}
                  size="large"
                  onClick={onButtonClick}
                  className={btn.className}
                >
                  {btn.text}
                  {btn.icon}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  showCollectionText: PropTypes.bool,
  showButtons: PropTypes.bool,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
      className: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
};

export default Hero;
