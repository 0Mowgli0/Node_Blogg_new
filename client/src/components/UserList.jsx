
import { useState, useEffect} from "react";
import UserItemSmall from "./UserItemSmall";
import {getAll} from '../services/UserService';

function UserList() {

const [users, setUsers] = useState([])

useEffect(() => {
 getAll().then(users => setUsers (users))
}, [])

 return (
    <ul>
        {users ?. length > 0 ? (
         users.map(user => (
         <li key={`user_${user.id}`}>
            <UserItemSmall user={user} />
         </li>
         ))
        ) : ( <h3>Kunde inte hitta användare</h3> 
        )}
    </ul>
    );
}

export default UserList;