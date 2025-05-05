const FirstParallaxSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/code-flowers.jpg')",
        backgroundPosition: "center 10%", // Bild nach unten verschieben
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-bold">Welcome to my Portfolio Page!</h1>
        <p className="text-xl mt-6 leading-relaxed">
          „Apps that not only challenge the status quo but also shape a sustainable future.“
        </p>
      </div>
    </section>
  );
};

export default FirstParallaxSection;