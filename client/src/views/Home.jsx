import PostList from "../components/PostList";
import { Grid, Paper, Typography } from "@mui/material";
import UserList from "../components/UserList";
import TagList from "../components/TagList";

function Home() {
    return (
 <>
    <Grid container spacing={8}>
    <Grid component="section" item xs={12} sm={8}>
    <Paper elevation={3} sx={{p: 2, mt:4, borderRadius: 2}}>
    <Typography variant="h2">Senaste inlägg</Typography>
    <PostList />
    </Paper>
    </Grid>
    <Grid component="section" item xs={12} sm={4}>
    <Paper elevation={3} sx={{p: 2, mt:4, borderRadius: 2}}>
    <Typography variant="h2">Användare</Typography>
     <UserList />
     </Paper>
     <Paper elevation={3} sx={{p: 2, mt:4, borderRadius: 2}}>
    <Typography variant="h2">Taggar</Typography>
     <TagList />  
     </Paper> 
    </Grid>
    </Grid>

</>
 );
}

export default Home;