import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Layout from "./components/layout";
import ClassNameSingle from "./pages/ClassSingle";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<ClassNameSingle />} />
      </Routes>
    </Layout>
  );
}

export default App;
