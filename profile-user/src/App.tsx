import React from 'react';
import './App.css';
import data from './users.json'
import ProfileListCard from './components/profile-list-card';

function App() {

  const users = data.users
  
  return (
    <div className="profile-list">
      {users.map((user)=> <ProfileListCard id = {user.id} firstname={user.firstname} lastname={user.lastname} age={user.age}/> )}
    </div>
  );
}

export default App;
