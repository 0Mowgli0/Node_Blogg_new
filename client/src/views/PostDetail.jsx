import PostItemLarge from "../components/PostItemLarge";
import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';


function PostDetail() {
    const post = {
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
        "tagg3",
        "tagg2"
    ],
    "comments": [
        {
            "title": "Kommentar",
            "body": "jag tycker att inlägget var bra",
            "author": "sam",
            "createdAt": "2026-03-10T10:34:23.000Z"
        }
    ]
}

const navigate = useNavigate();
    return(
    <div>
    <PostItemLarge post={post} />
    <Button onClick={() => navigate(-1)}>Tillbacka</Button>
    <Button onClick={() => navigate(`/posts/${post.id}/edit`)}>Ändra</Button>
    <CommentForm />
    {post.comments && 
     post.comments.map((comment, i) => (
     <Comment key={'comment_${i}'} comment={comment} />
    ))}
    </div>
    ); 
}

export default PostDetail;