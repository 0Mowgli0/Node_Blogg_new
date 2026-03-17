import axios from './api';

export async function getAll(endpoint = '/posts') {
    try {
        const response = await axios.get(endpoint);

    if (response.status === 200) return response.data;
    else{
        console.log(response); 
        return[];  
    }
    } catch (e) {
        e?.response? console.log(e.data) : console.log(e);
    }

}

export async function getOne(id){
    try {
        const respone = await axios.get(`/posts/${id}`);
        if (respone.status === 200) return respone.data;
        else  {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response? console.log(e.data) : console.log(e);
}
}


export async function create(post) {
    try {
        const respone = await axios.post(`/posts`, post);
        if (respone.status === 200) return respone.data;
        else  {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response? console.log(e.data) : console.log(e);
    }  
}

export async function update(post) {
    try {
        const respone = await axios.put(`/posts`, post);
        if (respone.status === 200) return respone.data;
        else  {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response? console.log(e.data) : console.log(e);
    }  
}

export async function remove(id) {
    try {
        const respone = await axios.delete(`/posts`, {data: {id}});
        if (respone.status === 200) return respone.data;
        else  {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response? console.log(e.data) : console.log(e);
    }  
}

export async function addComment(postId, commet) {
    try {
        const respone = await axios.post(`/posts/${postId}/adsComment`, comment);
        if (respone.status === 200) return respone.data;
        else  {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response? console.log(e.data) : console.log(e);
    }  
}

