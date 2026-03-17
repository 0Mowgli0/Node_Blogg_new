import axios from './api';

export async function getAll() {
    try {
        const response = await axios.get('/users');

    if (response.status === 200) return response.data;
    else{
        console.log(response); 
        return[];  
    }
    } catch (e) {
        e?.response? console.log(e.data) : console.log(e);
    }
}