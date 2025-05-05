import Link from 'next/link';

const BackToHomeButton = () => {
  return (
    <div className="absolute top-6 left-6 z-50">
      <Link
        href="/"
        className="bg-gray-600 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default BackToHomeButton;