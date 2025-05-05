const CTASection = () => {
    return (
      <section
        className="relative w-full h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/teamwork.jpg')", // Hier das gewünschte Bild einfügen
          backgroundPosition: "center center",
        }}
      >
        {/* Parallax Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Text Box */}
        <div className="relative z-10 flex justify-center items-center h-full px-4">
          <div className="max-w-4xl text-center bg-white bg-opacity-70 p-6 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Ready to bring your app idea to life?
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              As a developer with a strong entrepreneurial mindset, I’m always looking for new challenges.<br />
              Whether you’re looking for a passionate developer to join your team<br />or you have an idea that needs an app, let’s talk!
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;