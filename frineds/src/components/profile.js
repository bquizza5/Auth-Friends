import React, { useState }  from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import {  Route, Link } from 'react-router-dom';


const Profile = () => {
    const [ friends, setFriends ] = useState([]);

    const getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res.data)
        setFriends([...res.data])
      })
      .catch(err => console.log(err.response));
  };

    return (
        <>
        <div>hola</div>
        <button onClick={getData}>get friends</button>
        
        {friends.map(friend => {
            return (
                <div key={friend.name} className='friend'>
                    <h3>{friend.name}</h3>
                    <h3>Age: {friend.age}</h3>
                    <h3>Email: {friend.email}</h3>
                </div>
            )
        })}
        
        </>
    )
}
export default Profile