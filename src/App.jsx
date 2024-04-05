import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Layout from "./components/layout";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Classes />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Layout>
  );
}

export default App;
