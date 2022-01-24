import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-8xl text-green-200">
        React and Tailwind with Vitejs!
      </h1>
    </div>
  );
}

export default App;
