import { useState } from "react";
import classes from './App.module.scss'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <h1 className={"font-bold text-8xl text-green-200 " + classes.title}>
        React and Tailwind with Vitejs!
      </h1>
    </div>
  );
}

export default App;
