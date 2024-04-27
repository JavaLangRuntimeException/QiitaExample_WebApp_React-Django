// UsersList.js
import React, { useState, useEffect } from 'react';

const UsersList = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
   const fetchUsers = async () => {
     const response = await fetch('api/users/');
     const data = await response.json();
     setUsers(data);
   };

   fetchUsers();
 }, []);

 return (
   <div>
     <h1>UsersList</h1>
     <ul>
       {users.map((user) => (
         <li key={user.id}>
           {user.name} - {user.email}
         </li>
       ))}
     </ul>
   </div>
 );
};

export default UsersList;
