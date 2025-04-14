import "./App.css";
import { getAllEntries } from "./api/api.js";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    getAllEntries().then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;

