import BackToHomeButton from '@/components/BackToHomeButton';

const BoulderHallProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-green-700">BoulderHall App</h1>
      <img
        src="/BoulderhallePlauen/BoulderhalleMockupter.jpg"  // Füge hier das Mockup-Bild des Boulderhall-Projekts ein
        alt="BoulderHall App Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        **BoulderHall App** is designed to revolutionize your climbing gym experience. This app allows users to handle entry digitally, saving time and ensuring you spend more time climbing. 
      </p>
      <p className="mb-4 text-lg">
        The app allows you to track your climbing progress, explore available routes, and search/filter based on difficulty or type. It’s designed to enhance both the climbing experience and the social aspects of the gym.
      </p>
      <p className="mb-4 text-lg">
        Currently, the project is in the design phase, but the goal is to provide a user-friendly, time-saving experience while encouraging community interaction and supporting sustainability through the use of digital technology.
      </p>
      <p className="text-sm text-gray-500">Note: This project is still in progress and will be constantly updated with new features.</p>

      {/* Back to Home Button */}
      <BackToHomeButton />
    </div>
  );
};

export default BoulderHallProjectPage;