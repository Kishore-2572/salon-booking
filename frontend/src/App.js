import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Salonsignup from './pages/salon/Salonsignup';
import Signup from './pages/user/Signup';
import Saloninfo from './pages/user/Saloninfo';
import Login from './pages/Login';
import { useContext, useState } from 'react';
import { store } from './store';
import Logo from '../src/assets/logo.png';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Salonprofile from './pages/salon/Salonprofile';
import Profile from './pages/Profile';

function App() {
  // const [isScrolled, setIsScrolled] = useState(false);

  const { state, dispatch } = useContext(store);
  const { user } = state;
  const signoutHandler = () => {
    dispatch({ type: 'SIGNOUT' });
    localStorage.removeItem('user');
    window.location.href('/login');
  };

  // window.onscroll = () => {
  //   console.log('+++++++++++');
  //   setIsScrolled(window.pageYOffset === 0 ? false : true);
  //   console.log('=========');
  //   return () => (window.onscroll = null);
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="bottom-center" limit={1} theme="dark" />
        {user && (
          // <div className={isScrolled ? 'scrollednav' : 'navbar'}>
          <div className="navbar">
            <Link to="/">
              {' '}
              <img src={Logo} className="navbar-brand" />
            </Link>
            <div className="nav-items">
              <div className="nav-item-profile">
                <Link to="/profile/{userid}" className="nav-link">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJblmG352FTrVDWaSGC-e67GuM0_WnY5WgEQ&usqp=CAU"
                    style={{
                      width: '3rem',
                      height: '3rem',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </div>

              <div className="nav-item">
                <Link to="/login" onClick={signoutHandler} className="nav-link">
                  Logout{' '}
                </Link>
                <i className="fa-solid fa-right-from-bracket nav-icon"></i>
              </div>
            </div>
          </div>
        )}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/*  {user && (
              <> */}
            <Route path="/saloninfo/:salonid" element={<Saloninfo />} />
            <Route path="/profile/:userid" element={<Profile />} />
            <Route path="/salonregister" element={<Salonsignup />} />
            {/* </> */})
            {user && user.isAdmin && (
              <>
                <Route
                  path="/salonprofile/:salonid"
                  element={<Salonprofile />}
                />
              </>
            )}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
