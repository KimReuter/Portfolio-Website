import BackToHomeButton from '../../../components/BackToHomeButton';

const RandomActsOfKindnessProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-pink-600">Random Acts of Kindness</h1>
      <img
        src="/RandomActsOfKindness/RandomActsOfKindness_Preview.jpg"
        alt="Random Acts of Kindness App Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        Random Acts of Kindness is a heartwarming app prototype built during a 3-day project sprint. It encourages users to spread small moments of joy – every single day.
      </p>
      <p className="mb-4 text-lg">
        The app displays a daily act of kindness, lets users mark it as completed, and tracks their progress with a simple and engaging point system. Users can also discover more kind ideas at the tap of a button – all designed to be low-threshold, meaningful, and easy to integrate into everyday life.
      </p>
      <p className="mb-4 text-lg">
        My focus for this MVP was: fast usability, strong emotional value, and a delightful experience without external dependencies like Firebase – all built natively in Kotlin with Jetpack Compose.
      </p>
      <p className="text-sm text-gray-500">Note: This is a concept prototype developed under time constraints – features and UI may evolve.</p>

      {/* Back to Home Button */}
      <BackToHomeButton />
    </div>
  );
};

export default RandomActsOfKindnessProjectPage;