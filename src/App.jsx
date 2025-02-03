// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import MainDataroom from "./pages/MainDataroom";
import BackendSetting from "./pages/BackendSetting";
import ClientBackendSetting from "./pages/ClientBackendSetting";
import InvestorTokenomics from "./pages/InvestorTokenomics";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/marketingStrategy" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainDataroom" element={<MainDataroom />} />
          <Route path="/backendSetting" element={<BackendSetting />} />
          <Route
            path="/clientBackendSetting"
            element={<ClientBackendSetting />}
          />
          <Route
            path="/investorTokenomics"
            element={<InvestorTokenomics />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
