import { useState } from "react";
import Plasser from "./components/Plasser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Plasser message="hei" name="Robert"/>
  );
}

export default App;
