import "./index.css";
import Header from "./Components/Header";
import Frontpage from "./Components/Frontpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import MapTest from "./Components/MapTest";
import Agentpanel from "./Pages/Agentpanel";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<MapTest />} />
          <Route path="/agentpanel" element={<Agentpanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
