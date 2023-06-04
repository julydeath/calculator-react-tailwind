import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="max-w-[560px] mx-auto bg-gray-200 mt-10 border rounded-lg">
      <h1 className="text-2xl font-bold text-center mt-4 underline">
        CALCULATOR
      </h1>

      <Keyboard />
    </div>
  );
}

export default App;
