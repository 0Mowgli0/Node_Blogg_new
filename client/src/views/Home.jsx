import PostList from "../components/PostList";
import { Grid } from "@mui/material";
import UserList from "../components/UserList";
import TagList from "../components/TagList";

function Home() {
    return (
 <>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={8}>
    <PostList />
    </Grid>
    <Grid item xs={12} sm={4}>
     <UserList />
     <TagList />   
    </Grid>
    </Grid>

</>
 );
}

export default Home;