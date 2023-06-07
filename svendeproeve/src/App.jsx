import "./index.css";
import Header from "./Components/Header";
import Frontpage from "./Components/Frontpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import MapTest from "./Components/MapTest";
import Agentpanel from "./Pages/Agentpanel";
import CasePage from "./Components/CasePage";
import TestingPurposes from "./Components/TestingPurposes";
import CreateCaseDesign from "./Components/CreateCaseDesign";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/about" element={<CreateCaseDesign />} />
          <Route path="/case/:id" element={<CasePage />} />
          <Route path="/agentpanel" element={<Agentpanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
