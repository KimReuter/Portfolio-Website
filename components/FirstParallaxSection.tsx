const FirstParallaxSection = () => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-screen bg-cover bg-center sm:bg-fixed bg-no-repeat"
      style={{
        backgroundImage: "url('/code-flowers.jpg')",
        backgroundPosition: "center 10%",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-3xl sm:text-6xl font-bold leading-tight text-balance">
          Welcome to my Portfolio Page!
        </h1>
        <p className="text-md sm:text-xl mt-4 sm:mt-6 leading-relaxed max-w-xl">
          „Apps that not only challenge the status quo but also shape a sustainable future.“
        </p>
      </div>
    </section>
  );
};

export default FirstParallaxSection;