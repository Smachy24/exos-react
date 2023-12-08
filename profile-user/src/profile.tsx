import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/profile-info.css';
import img from './assets/profile-photo.jpg'
import data from './users.json'

function Profile() {

  interface User {
    id?: number;
    firstname?: string;
    lastname?: string;
    age?: number;
  }
  
  const users = data.users

  const { userId } = useParams();

  const initialUser: User = {};
  
  const [currentUser, setCurrentUser] = useState<User>(initialUser);
  
  useEffect(() => {
    const foundUser = users.find(user => user.id.toString() === userId);
    setCurrentUser(foundUser || {});
  }, []);

  return (
    <div className="page">
      <div className="profile">
        <div className="profile-photo">
          <img src={img} alt="Random profile" />
        </div>
        <div className="profile-info">
          <div className="profile-firstname">{currentUser.firstname}</div>
          <div className="profile-lastname">{currentUser.lastname}</div>
          <div className="profile-age">{currentUser.age} ans</div>
        </div>
      </div>
     
    </div>
    
  );
}

export default Profile;
