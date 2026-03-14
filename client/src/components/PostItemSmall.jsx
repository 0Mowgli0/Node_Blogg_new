function PostItemSmall({post}) {
    return ( 
    <>
    <h3>{post.title}</h3>
    <p> skrivet av: {post.author.username}</p>
    <p> {post.body}</p>
    </> 
    );
}

export default PostItemSmall;