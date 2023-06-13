import "./index.css";
import Header from "./Components/Header";
import Frontpage from "./Components/Frontpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import MapTest from "./Components/MapTest";
import Agentpanel from "./Pages/Agentpanel";
import CasePage from "./Components/CasePage";
import TestingPurposes from "./Components/TestingPurposes";
import CreateCase from "./Components/CreateCase";
import { ToastContainer } from "react-toastify";
import MyCasesPage from "./Components/MyCasesPage";
import HelpPage from "./Components/helpPage";
import SearchPage from "./Components/searchPage";
import EditCase from "./Components/EditCase";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/addcase" element={<CreateCase />} />
          <Route path="/editcase" element={<EditCase />} />
          <Route path="/case/:id" element={<CasePage />} />
          <Route path="/agentpanel" element={<Agentpanel />} />
          <Route path="/myCases" element={<MyCasesPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
