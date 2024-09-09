import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'

import TopBanner from './components/header/TopBanner';
import Header from './components/header/Header';

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

  return (
    <div>
      <TopBanner isLoggedIn={isLoggedIn} name={user.name}/>
      <Header /> 
      <Routes>
        
        {/* <Route path="/" element={<Homepage />} />  */}
      </Routes>
    </div>
  );
}

export default App
