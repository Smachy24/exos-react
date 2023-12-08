import React from 'react';
import '../styles/profile-list-card.css';

function ProfileListCard(props:{id:number; firstname:string; lastname:string; age:number}) {

  
  return (
    <div className="profile-list-card">
      <div className="profile-list-firstname">
        {props.firstname}
      </div>
      <div className="profile-list-lastname">
        {props.lastname}
      </div>
      <div className="profile-list-id">
        {props.id}
      </div>
      
    </div>
  );
}

export default ProfileListCard;
