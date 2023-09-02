import React, { useEffect, useState } from 'react';
import img from '../images/profile.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Profile() {
  const { logout,userData,setUserData } = useAuth();

  const navigate = useNavigate()

  const [disable, setDisable] = useState(true);

  useEffect(() => {

  }, []);

  const handleEdit = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setDisable(!disable);
  };
  const logOut=()=>{
    logout(false)
    navigate('/login')
  }

  return (
    <div>
      <div className="profile-main">
        <div className="profile">
          <div className="userData">
            <div className="img">
              <img src={img} alt="Profile" />
            </div>
            <div className="name">
              <input
                type="text"
                onChange={handleEdit}
                disabled={disable}
                value={userData.name}
                name="name"
              />
            </div>
            <div className="email">
              <input
                type="text"
                onChange={handleEdit}
                disabled={disable}
                value={userData.email}
                name="email"
              />
            </div>
            <div className="mobile">
              <input
                type="text"
                onChange={handleEdit}
                disabled={disable}
                value={userData.phone}
                name="phone"
              />
            </div>
            <div className="address">
              <textarea
                rows={10}
                onChange={handleEdit}
                disabled={disable}
                value={userData.address}
                name="address"
              />
            </div>
          </div>
          <div className="buttons">
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
