"use client";

import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 1, title: "Home", url: "#hero" },
    { id: 2, title: "About", url: "#about" },
    { id: 3, title: "Our Services", url: "#services" },
    { id: 4, title: "Why Choose Us", url: "#why-choose-us" },
    { id: 4, title: "Testimonials", url: "#Testimonials" },
    { id: 5, title: "Our Work", url: "#Our-Work-Section" },
    { id: 5, title: "What We Do", url: "#what-we-do" },
    { id: 6, title: "Contact", url: "#signup" },
    
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 text-white shadow-lg">
      <div className="flex items-center justify-between px-5 lg:px-10 py-4 max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <a className="flex items-center space-x-2" href="#hero">
          <img
            src="social sphere logo.png"
            alt="Social Sphere Logo"
            className="h-[50px] w-auto object-contain"
          />
          <img
            src="social sphere 2 logo.png"
            alt="Social Sphere Logo 2"
            className="h-[50px] w-auto object-contain"
          />
        </a>

        {/* Navigation for Desktop */}
        <nav
          className="hidden lg:flex items-center space-x-8"
          aria-label="Main Navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="font-cormorant hover:text-gold font-medium text-sm uppercase transition duration-200"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden hover:text-gold focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/95 z-40 flex flex-col items-center justify-center space-y-6"
          aria-label="Mobile Navigation"
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 hover:text-gold focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-white font-cormorant hover:text-gold font-medium text-2xl uppercase transition duration-200"
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
            >
              {item.title}
            </a>
          ))}

          {/* Contact Button */}
          <a
            href="#signup"
            className="text-center mt-4 bg-gold hover:bg-green text-black font-cormorant font-medium text-xl uppercase py-3 px-6 rounded-lg transition duration-200"
            onClick={() => setMobileMenuOpen(false)} // Close menu on click
          >
            Get in Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

