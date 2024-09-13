import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react'

import './styles/styles.css';

import TopBanner from './components/header/TopBanner';
import Header from './components/header/Header';
import Banner from './components/header/Banner';
import Navigation from './components/navigation/Navigation';
import Register from './components/login/Register';
import Admin from './components/admin/Admin';
import Footer from './components/Footer';

function App(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

  const navigate = useNavigate(); 

  const registerUser = async (user) => {
    const payload = { ...user };
    await apis.register(payload).then(res => {
      if (res.data.email) {
        setIsLoggedIn(true);
        props.history.push("/");
      } else {
        //  TODO Surface errors to user (e.g. account is already registered)
        //  🏭 🏭 🏭 🏭 🏭 🏭
        console.log('error', res);
      }
    });
  }

  const logoutUser = async (user) => {
    const payload = { ...user };
    await apis.logout(payload).then(res => {
      setIsLoggedIn(false);
      setUserOrders([]);
      setOrders([]);
      setCart([]);
      navigate("/");
    });
  }

  return (
    <div>
      <TopBanner isLoggedIn={isLoggedIn} name={user.name}/>
      <Header /> 
      <Routes>
        <Route path="/register" 
            element={
              <>
                <Navigation isLoggedIn={isLoggedIn} isAdmin={user.isAdmin} logoutUser={logoutUser} />
                <Banner bannerString={"Register a New Account"} />
                <Register 
                  registerUser={registerUser}
                  isLoggedIn={isLoggedIn} 
                />
              </>
            }
          />
        <Route path="/admin" 
          element={
            <>
              <Banner bannerString={"Site Administration"} />
              <Navigation isLoggedIn={isLoggedIn} isAdmin={user.isAdmin} logoutUser={logoutUser} />
              <Admin />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
