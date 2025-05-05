import BackToHomeButton from "../../components/BackToHomeButton";

const GreenlyProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Greenly</h1>
      <img
        src="/Greenly/GreenlyMockup2.jpg"
        alt="Greenly App Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        Greenly is my very first app – focused on creating sustainable cosmetics, completely DIY and without unnecessary packaging waste.
      </p>
      <p className="mb-4 text-lg">
        Users will find well-organized recipes, can directly add the needed ingredients to a shopping list, and later transfer them into their inventory – perfect for personal planning. The app emphasizes simplicity, functionality, and a modern, nature-inspired look.
      </p>
      <p className="mb-4 text-lg">
        The app is still in progress, but the basic structure is in place. The focus is clearly on thoughtful UX, real-life features, and the mission to make sustainability easily accessible.
      </p>
      <p className="text-sm text-gray-500">Note: The displayed content is still under construction.</p>

      {/* Back to Home Button */}
      <BackToHomeButton />
    </div>
  );
};

export default GreenlyProjectPage;

