import UserItemSmall from "./UserItemSmall";
function UserList() {

const users = [
    {
        "id": 1,
        "email": "sa@du.se",
        "username": "sam",
        "firstName": null,
        "lastName": null,
        "description": null,
        "imageUrl": null,
        "createdAt": "2026-03-07T12:43:44.000Z",
        "updatedAt": "2026-03-07T12:43:44.000Z"
    },
    {
        "id": 2,
        "email": "olle.osten@du.se",
        "username": "Olle",
        "firstName": null,
        "lastName": null,
        "description": null,
        "imageUrl": null,
        "createdAt": "2026-03-11T10:00:21.000Z",
        "updatedAt": "2026-03-11T10:00:21.000Z"
    }
];

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