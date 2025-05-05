import Link from 'next/link';
import { useState, useEffect } from 'react';

const ContactButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const scrollPosition = window.scrollY;

      // Wenn der Benutzer im "Contact"-Bereich ist, Button ausblenden
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        const contactBottom = contactTop + contactSection.offsetHeight;

        // Wenn die Scroll-Position innerhalb des Contact-Bereichs liegt, Button ausblenden
        if (scrollPosition >= contactTop - 800 && scrollPosition <= contactBottom) {
          setShowButton(false); // Button ausblenden
        } else if (scrollPosition > 100) {
          setShowButton(true); // Button anzeigen, wenn mehr als 100px gescrollt wurde
        } else {
          setShowButton(false); // Button ausblenden, wenn der Benutzer oben ist
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-10 right-10 z-50 transition-opacity ${showButton ? 'opacity-100' : 'opacity-0'}`}>
      {/* Button mit dezentem Grauton */}
      <Link href="#contact">
        <button className="bg-gray-600 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors">
          Contact Me
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;