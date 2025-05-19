import BackToHomeButton from '../../../components/BackToHomeButton';

const SylandoProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Sylando – Shopping App</h1>
      <img
        src="/Sylando/SylandoMockup.jpg"  
        alt="Sylando App Preview"
        className="w-full rounded-lg shadow-md mb-8"
      />
      <p className="mb-4 text-lg">
        **Sylando** ist eine minimalistische Shopping-App, die im Rahmen eines einwöchigen Projekts mit Swift entstanden ist. 
        Der Fokus lag klar auf der technischen Struktur, nicht auf der Optik.
      </p>
      <p className="mb-4 text-lg">
        Ziel war es, die Architekturprinzipien rund um ViewModel, Repository und Datenfluss zu verstehen und umzusetzen. 
        Ich habe Produktdaten modelliert, Zustände verwaltet und einfache Logik für Favoriten und Einkaufslisten eingebaut.
      </p>
      <p className="mb-4 text-lg">
        Dieses Projekt hat mir geholfen, das Zusammenspiel von UI und Datenquelle besser zu verstehen und ein stabiles Fundament für kommende Apps zu legen.
      </p>
      <p className="text-sm text-gray-500">
        Note: Design war zweitrangig – das Projekt diente rein der Architektur- und Kotlin-Praxis.
      </p>

      <BackToHomeButton />
    </div>
  );
};

export default SylandoProjectPage;