const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-200">
      <h2 className="text-3xl text-center mb-8 font-semibold">Contact Me</h2>
      <form className="max-w-xl mx-auto px-4 grid gap-4">
        
        {/* Zentrierter Button mit Kapsel-Form und Farbe */}
        <div className="text-center">
          <a
            href="mailto:kimbaerlyyo@web.de?subject=Message from Portfolio&body=Your message goes here"
            className="bg-gray-600 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          >
            Send E-Mail
          </a>
        </div>
      </form>

      <div className="mt-12 text-center text-gray-700">
        <p className="mb-4">Or find me here:</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/KimReuter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kim-reuter-900385358/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/4915562016990?text=Hallo%20Kim%2C%20ich%20hab%20deine%20Website%20gesehen%20und%20wollte%20mich%20melden."
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;