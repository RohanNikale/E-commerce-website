import React, { useEffect, useState } from 'react';
import img from '../images/profile.jpg';
import Cookies from 'js-cookie';

const API_URL = 'https://drab-gold-shark-boot.cyclic.app';

function Profile() {
  const [userData, setUserData] = useState({
    name: 'Login',
    email: 'abc@xyz.com',
    phone: 902140514,
    address: 'B-5, Sector -67, Noida Uttar Pradesh, India',
  });

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_URL}/getuserData`, {
          method: 'POST',
          headers: {
            'token': token,
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data.');
        }
      } catch (error) {
        console.error('An error occurred while fetching user data.', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setDisable(!disable);
  };

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
            <button>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
