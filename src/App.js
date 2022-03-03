import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Loginpage from './components/Loginpage/Loginpage';
import ForAuthUser from './components/ForAuthUser/ForAuthUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setAuth(true);
    navigate('/forauthuser');
  }

  const logout = () =>{
    setAuth(false);
    navigate('/');
  }
  
  const urlMS ="https://online.moysklad.ru/api/remap/1.2/security/token";
  fetch({
    urlMS,
      method:"POST",
      headers: {
        'Authorization' : 'aXRAjU2'
      },
    }).then(response=>console.log(response));

  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Loginpage loginHandler={login}/>}/>
        <Route element={<PrivateRoute auth={auth}/>}>
          <Route path ='/forauthuser/*' element={<ForAuthUser loginHandler={logout}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
