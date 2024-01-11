import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AuthForm from "./components/AuthForm/AuthForm";
import Main from "./components/Main";
// import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
// import CreateRoom from "./pages/CreateRoom.jsx";
// import JoinRoom from "./pages/JoinRoom";
import AboutUs from "./pages/AboutUs";
import Challenges from "./pages/Challenges"
import Workspace from "./pages/Workspace.jsx";
function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/main" element={<Main />} />
          <Route path="/challenges" element={<Challenges/>} />
          <Route path="/workspaces" element={<Workspace/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/workspaces" element={<Workspace />}/>
          {/* <Route path="/rooms/create" element={<CreateRoom />} />
          <Route path="/rooms/join" element={<JoinRoom />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
