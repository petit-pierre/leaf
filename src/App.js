import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import User from "./pages/User";
import Error404 from "./pages/404";
import Qizz from "./pages/Quizz";
import Defis from "./pages/Defis";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/Qizz/:question_id" element={<Qizz />} />
        <Route path="/Defis" element={<Defis />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
