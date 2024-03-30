import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Classes />} />
    </Routes>
  );
}

export default App;
