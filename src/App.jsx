import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Layout from "./components/layout";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";
import SuccessfulSignIn from "./pages/SuccessfulSIgnIn"
// import ClassNameSingle from "./pages/ClassSingle";
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
        <Route path="/entry" element={<Entry />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/index" element={<SuccessfulSignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/classes/:id" element={<ClassNameSingle />} /> */}
        <Route path="/building" element={<Building />} />
        <Route path="/classes/:id" element={<ClassNameSingle />} />
      </Routes>
    </Layout>
  );
}

export default App;
