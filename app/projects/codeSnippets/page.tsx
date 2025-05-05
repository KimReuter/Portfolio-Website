import BackToHomeButton from "../../components/BackToHomeButton";

const CodeSnippetsProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Code Snippets</h1>
      <img
        src="/placeholder-code-snippets.jpg"  // Bild des Projekts
        alt="Code Snippets Project Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        "Code Snippets" is a web application that allows users to create and save their own small code snippets. With a login system, users can save their snippets and access them anytime.
      </p>
      <p className="mb-4 text-lg">
        The application provides an easy-to-use interface to quickly store and organize code snippets, with the ability to tag and search through them.
      </p>
      <p className="mb-4 text-lg">
        Currently, the project is focused on functionality, including user authentication and a snippet display system.
      </p>
      <p className="text-sm text-gray-500">Note: This project is still a work in progress and is continuously being improved.</p>

      {/* Back to Home Button */}
      <BackToHomeButton />
    </div>
  );
};

export default CodeSnippetsProjectPage;