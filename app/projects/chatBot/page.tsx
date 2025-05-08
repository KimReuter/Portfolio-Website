import BackToHomeButton from '../../../components/BackToHomeButton';

const ChatBotProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Chat Bot App</h1>
      <img
        src="/ChatBot/ChatBotMockup.jpg" // Passe ggf. den Bildpfad an
        alt="Chat Bot App Project Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        This project was all about laying the foundation. I built a simple chatbot interface using Jetpack Compose to explore the most essential building blocks of modern Android UI development.
      </p>
      <p className="mb-4 text-lg">
        I focused on learning and applying key Compose elements like <span className="font-medium">Text, Image, Icon, Row, Column</span>, and custom Composables. I also practiced different layout structures including <span className="italic">LazyColumn</span> for dynamic lists.
      </p>
      <p className="mb-4 text-lg">
        Styling and consistency were also part of the journey – I used themes, typography, and color schemes, and explored how to work with Previews for faster UI iteration.
      </p>
      <p className="text-sm text-gray-500">
        This chatbot doesn’t talk much yet – but it helped me find my way into the world of Jetpack Compose.
      </p>

      {/* Back to Home Button */}
      <BackToHomeButton />
    </div>
  );
};

export default ChatBotProjectPage;