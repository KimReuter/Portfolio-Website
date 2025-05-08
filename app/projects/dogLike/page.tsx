import BackToHomeButton from '../../../components/BackToHomeButton';

const DoglikeProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Doglike – Swift Wochenprojekt</h1>
      <img
        src="/DogLike/DogLikeMockup.jpg"  // Passe den Pfad ggf. an, wenn das Bild anders heißt
        alt="Doglike App Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        **Doglike** ist eine kleine, humorvolle Swift-App, die im Rahmen eines einwöchigen Projekts entstanden ist. Ziel war es, weniger auf Design und mehr auf technische Herausforderungen wie Animation, Testing und Notifications zu fokussieren.
      </p>
      <p className="mb-4 text-lg">
        Ich habe mit Core Animation experimentiert, interaktive Komponenten animiert und Push- sowie Local Notifications implementiert. Zusätzlich habe ich das erste Mal Unit Tests in Swift eingebaut, um das Verhalten der App gezielt zu prüfen.
      </p>
      <p className="mb-4 text-lg">
        Das Projekt war ein spielerischer Ausflug in fortgeschrittene iOS-Features – mit jeder Menge Aha-Momenten und neuen Erkenntnissen für kommende Projekte.
      </p>
      <p className="text-sm text-gray-500">Note: Das Projekt wurde in nur wenigen Tagen umgesetzt und dient hauptsächlich zum Lernen & Experimentieren.</p>

      {/* Back to Home Button */}
      <BackToHomeButton />
    </div>
  );
};

export default DoglikeProjectPage;