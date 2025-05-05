import BackToHomeButton from "../../../components/BackToHomeButton";

const SocialMediaProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Social Media App</h1>
      <img
        src="/socialmedia-app-preview.jpg" // Hier kannst du später dein echtes Projektbild einsetzen
        alt="Social Media App Project Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        This Kotlin-based Social Media App was my personal playground to explore and practice advanced concepts in Jetpack Compose. I focused on building a clean UI structure and making state management feel intuitive and reactive.
      </p>
      <p className="mb-4 text-lg">
        I implemented a modular screen setup with reusable components, modal Composables, and parameterized functions. Along the way, I also explored <span className="italic">LaunchedEffect</span>, animations, and bottom sheets for a more interactive experience.
      </p>
      <p className="mb-4 text-lg">
        The app features a feed where users can interact with posts and trigger share modals. It’s a simple UI prototype—but packed with Compose fundamentals and thoughtful architecture.
      </p>
      <p className="text-sm text-gray-500">
        Note: This project is part of my ongoing learning journey and will be continuously improved as I deepen my Compose skills.
      </p>

      {/* Back to Home Button */}
      <BackToHomeButton />
    </div>
  );
};

export default SocialMediaProjectPage;