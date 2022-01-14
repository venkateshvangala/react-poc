import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchUser } from './store/actions'
import Login from './login/Login';
import Profile from "./profile/Profile";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>}  />
          <Route exact path="/login" element={<Login/>}  />
          <Route exact path="/profile" element={<Profile/>}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
