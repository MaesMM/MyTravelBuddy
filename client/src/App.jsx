import Header from "./components/shared/Header/Header";
import System from "./styles/system/System";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/system" element={<System />} />
          <Route exact path="/auth/register" element={<Register />} />
          <Route exact path="/auth/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
