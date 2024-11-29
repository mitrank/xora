import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 flex w-full justify-between items-center max-md:flex-col max-md:justify-center">
        <p className="small-compact opacity-70">Copyright, Mitrank Shah</p>

        <ul className="flex justify-center gap-3 max-md:mt-10 md:justify-end">
          {socials.map((item, id) => (
            <li key={item.id}>
              <a href={item.url} className="social-icon">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="size-1/3 object-contain"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center max-md:mt-10">
          <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
            Privacy Policy
          </p>
          <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
            Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
