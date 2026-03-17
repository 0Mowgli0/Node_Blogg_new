import PostItemSmall from "./PostItemSmall";
import {getAll} from "../services/PostService";
import {useState} from 'react'
import { useEffect } from "react";

function PostList({pathname}) {

const [posts, setPosts] = useState([])

useEffect(() => {
  getAll(pathname).then(posts => {
    setPosts(posts)
  });
}, [pathname]);

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