import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialLink = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
      <div className="flex flex-col gap-4">
        <a
          href="https://www.facebook.com/"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:translate-x-[-4px] transition-all duration-300"
          aria-label="Facebook"
        >
          <Facebook size={16} />
        </a>
        <a
          href="https://x.com/"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:translate-x-[-4px] transition-all duration-300"
          aria-label="Twitter"
        >
          <Twitter size={16} />
        </a>
        <a
          href="https://www.instagram.com/"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:translate-x-[-4px] transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagram size={16} />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:translate-x-[-4px] transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
