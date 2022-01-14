import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchUser } from './store/actions'
import Login from './login/Login';
import Profile from "./profile/Profile";

const PrivateRoute = () => {
    const auth = localStorage.getItem('isLoggedIn'); 
    return auth === 'true' ? <Outlet /> : <Navigate to="/login" />;
}

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
          <Route  exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/profile' element={<Profile/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
