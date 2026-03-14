import Tag from "./Tag";
function TagList() {

 const tags = [
    {
        "id": 1,
        "name": "tagg2",
        "createdAt": "2026-03-11T10:25:48.000Z",
        "updatedAt": "2026-03-11T10:25:48.000Z"
    },
    {
        "id": 2,
        "name": "entagg",
        "createdAt": "2026-03-11T10:25:48.000Z",
        "updatedAt": "2026-03-11T10:25:48.000Z"
    },
    {
        "id": 3,
        "name": "tagg3",
        "createdAt": "2026-03-11T10:25:48.000Z",
        "updatedAt": "2026-03-11T10:25:48.000Z"
    },
    {
        "id": 4,
        "name": "tagg1",
        "createdAt": "2026-03-11T10:55:13.000Z",
        "updatedAt": "2026-03-11T10:55:13.000Z"
    }
];
    return (   
    <ul>
        {tags ?. length > 0 ? (
         tags.map(tag => (
         <li key={tag.name}>
            <Tag text ={tag.name} />
         </li>
         ))
        ) : ( 
        <h3>Kunde inte hitta användare</h3> 
        )}
    </ul> );
}

export default TagList;