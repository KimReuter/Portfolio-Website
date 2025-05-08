import { useState, useEffect } from 'react';

const CapsuleNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'projects', 'about', 'skills', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && scrollPosition >= section.offsetTop) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Voices' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-2 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 
                bg-white bg-opacity-90 px-2 sm:px-4 py-1 sm:py-2 rounded-full 
                shadow-md flex space-x-1 sm:space-x-2 
                overflow-x-auto max-w-[95vw] sm:max-w-none scrollbar-hide">
  {navItems.map((item) => (
    <span
      key={item.id}
      className={`px-2 sm:px-4 py-1 text-xs sm:text-sm whitespace-nowrap rounded-full 
                  transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'bg-green-500 text-green-700 font-semibold'
                      : 'text-gray-600 hover:text-green'
                  }`}
      onClick={() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {item.label}
    </span>
  ))}
</div>
  );
};

export default CapsuleNav;