import System from "./styles/system/System";
import Header from "./components/shared/Header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home/Home";

import StructureLayout from "./pages/structure/StructureLayout";
import Dashboard from "./pages/structure/pages/Dashboard/Dashboard";
import Profile from "./pages/structure/pages/Profile/Profile";
import Events from "./pages/structure/pages/Events/Events";
import Settings from "./pages/structure/pages/Settings/Settings";

import Create from "./pages/structure/pages/Events/Create/Create";

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

          <Route exact path="/structures" element={<StructureLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<Events />} />
            <Route path="events/create" element={<Create />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
