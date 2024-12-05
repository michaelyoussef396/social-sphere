const Header = () => {
    const navigation = [
      { id: 1, title: "Home", url: "#hero" },
      { id: 2, title: "Our Services", url: "#services" },
      { id: 3, title: "What We Do", url: "#what-we-do" },
      { id: 4, title: "Why Choose Us", url: "#why-choose-us" },
    ];
  
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-lg backdrop-blur-lg">
        <div className="flex items-center justify-between px-5 lg:px-10 py-4">
          {/* Logo Section */}
          <a className="block w-[12rem] flex items-center space-x-2" href="#hero">
            <img
              src="social sphere logo.png"
              alt="Social Sphere Logo"
              className="h-[50px] w-auto object-contain"
            />
            <img
              src="social sphere 2 logo.png"
              alt="Social Sphere Logo 2"
              className="h-[60px] h-[50px] w-auto object-contain"
            />
          </a>
  
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="text-gray-800 hover:text-blue-500 font-medium text-sm uppercase transition duration-200"
              >
                {item.title}
              </a>
            ))}
          </nav>
  
          {/* CTA Button */}
          <a
            href="#signup"
            className="hidden lg:block text-white bg-blue-500 hover:bg-blue-600 font-medium px-6 py-2 rounded-lg transition duration-200"
          >
            Get in Contact
          </a>
  
          {/* Mobile Menu Button (Optional) */}
          <button
            className="lg:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  