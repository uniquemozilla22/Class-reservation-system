import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Layout from "./components/layout";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn"
import SuccessfulSignIn from "./pages/SuccessfulSIgnIn"
// import ClassNameSingle from "./pages/ClassSingle";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Classes />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/index" element={<SuccessfulSignIn />} />
        {/* <Route path="/classes/:id" element={<ClassNameSingle />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
