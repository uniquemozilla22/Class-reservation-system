import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Layout from "./components/layout";
import ClassNameSingle from "./pages/ClassSingle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Building from "./pages/building";
function App() {
  return (
    <Layout>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/building" element={<Building />} />
        <Route path="/classes/:id" element={<ClassNameSingle />} />
      </Routes>
    </Layout>
  );
}

export default App;
