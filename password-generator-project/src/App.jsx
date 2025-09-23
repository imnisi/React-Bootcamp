import PasswordGenerator from "./components/PasswordGenerator";
import PasswordGenerators from "./components/PasswordGenerators";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-10">
        Password Generator Showcase
      </h1>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* useCallback version */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            Password Generator (useCallback)
          </h2>
          <PasswordGenerator />
        </div>

        {/* useEffect version */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-pink-700 mb-4">
            Password Generator (useEffect)
          </h2>
          <PasswordGenerators />
        </div>
      </div>
    </div>
  );
}

export default App;
