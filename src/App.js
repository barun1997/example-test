import "./App.css";
import IncreaseValueBy10 from "./components/button1.tsx";
import IncreaseValueBy20 from "./components/button2.tsx";
import IncreaseValueBy30 from "./components/button3.tsx";

import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <p>{value}</p>
      <IncreaseValueBy10 setValue={setValue} />
      <IncreaseValueBy20 setValue={setValue} />
      <IncreaseValueBy30 setValue={setValue} />
    </div>
  );
}

export default App;
