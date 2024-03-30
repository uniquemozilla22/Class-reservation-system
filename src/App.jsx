import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Classes />} />
      </Routes>
    </Layout>
  );
}

export default App;
