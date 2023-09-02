// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();
const API_URL = 'http://localhost:8000/user';

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Login',
    email: 'abc@xyz.com',
    phone: 902140514,
    address: 'B-5, Sector -67, Noida Uttar Pradesh, India',
  });

  const token = Cookies.get('token');

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${API_URL}/getuserprofile`, {
        method: 'GET',
        headers: {
          'token': token,
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  
      if (response.ok) {
        const user = await response.json();
        setUserData(user.user);
      } else {
        console.error('Failed to fetch user data.');
      }
    } catch (error) {
      console.error('An error occurred while fetching user data.', error);
    }
  };  

  fetchUserData();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout,userData,setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
