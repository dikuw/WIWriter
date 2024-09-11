import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'

import './styles/styles.css';

import TopBanner from './components/header/TopBanner';
import Header from './components/header/Header';
import Banner from './components/header/Banner';
import Navigation from './components/navigation/Navigation';
import Admin from './components/admin/Admin';

function App(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

  const logoutUser = async (user) => {
    const payload = { ...user };
    await apis.logout(payload).then(res => {
      setIsLoggedIn(false);
      setUserOrders([]);
      setOrders([]);
      setCart([]);
      props.history.push("/");
    });
  }

  return (
    <div>
      <TopBanner isLoggedIn={isLoggedIn} name={user.name}/>
      <Header /> 
      <Routes>
        <Route path="/admin" 
          element={
            <>
              <Banner bannerString={"Site Administration"} />
              <Navigation isLoggedIn={isLoggedIn} isAdmin={user.isAdmin} history={props.history} logoutUser={logoutUser} />
              <Admin history={props.history} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App
