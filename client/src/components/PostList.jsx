import PostItemSmall from "./PostItemSmall";

function PostList() {
const posts = [
    {
        "id": 1,
        "title": "test för taggar uppdateras",
        "body": "innehåll i inlägget",
        "createdAt": "2026-03-10T10:11:49.000Z",
        "updatedAt": "2026-03-11T10:36:04.000Z",
        "author": {
            "id": 1,
            "username": "sam",
            "email": "sa@du.se",
            "firstName": null,
            "lastName": null,
            "imageUrl": null
        },
        "tags": [
            "tagg2",
            "tagg3"
        ]
    },
    {
        "id": 10,
        "title": "test för taggar uppdateras",
        "body": "innehåll i inlägget",
        "createdAt": "2026-03-11T10:25:47.000Z",
        "updatedAt": "2026-03-11T10:55:13.000Z",
        "author": {
            "id": 2,
            "username": "Olle",
            "email": "olle.osten@du.se",
            "firstName": null,
            "lastName": null,
            "imageUrl": null
        },
        "tags": [
            "tagg2",
            "entagg",
            "tagg3",
            "tagg1"
        ]
    }
]

   return (
  <ul>
    {posts?.length > 0 ? (
      posts.map((post) => (
        <li key={`post_${post.id}`}>
          <PostItemSmall post={post} />
        </li>
      ))
    ) : (
      <h3>kunde inte hämta inlägg</h3>
    )}
  </ul>
);
}

export default PostList;