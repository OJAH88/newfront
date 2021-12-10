// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Feed from "./components/feed/Feed";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React, { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    // <BrowserRouter>
      
        <div className="App">
          <Topbar user={user} setUser={setUser} />
          <div className="content">
          <Routes>
            <Route exact path="/"  user={user} setUser={setUser}  element={<Home />} />
            <Route path="/signup"  element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/me"   user={user} setUser={setUser}  element={<Profile />} />
            <Route path="/logout"  user={user} setUser={setUser}  element={<Login />} />
            </Routes>
          </div>
        </div>
      
    // </BrowserRouter>
  );
}

export default App;