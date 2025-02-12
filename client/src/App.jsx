import React from 'react'
import AuthLayout from "./components/auth/layout";
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import NotFound from './pages/not-found';
import Unauthorized from './pages/unauth-page';
import CheckAuth from './components/common/check-auth';
import Header from './components/common/header';
import Homepage from './pages/Homepage';
const App = () => {
  const isAuthenticated = false;
  const user = null;
  return (<>
    <Header></Header>
    <div className='flex flex-col overflow-hidden bg-white h-[93vh] '>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/unauth" element={<Unauthorized />}></Route>
      </Routes>
    </div>
  </>
  )
}

export default App
