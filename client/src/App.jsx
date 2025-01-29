import React from 'react'
import AuthLayout from "./components/auth/layout";
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
