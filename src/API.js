import axios from 'axios';
import _default from 'react-redux/es/components/connect';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
baseURL='http://localhost:8000/'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
        
    }
});


export default class API {
    getPosts = async params => {
        try {
            const response = await api.get('/posts/', { params });
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    addPost = async postBody => {
        const formData = new FormData();

        for (const key in postBody) {
            formData.append(key, postBody[key]);
        }

        try {
            const response = await api.post('/posts/add/', formData);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    deletePost = async id => {
        try {
            return await api.delete(`/posts/delete/${id}/`);
        } catch (error) {
            throw new Error(error);
        }
    };

    getMovies = async params => {
        try{
            const response = await api.get('/movies/', { params });
            return response.data.results;

        }catch (error) {
            throw new Error(error);
            
        }
    }


    getCategories = async params => {
        try{
            const response = await api.get('/categories/', { params });
            return response.data.results;

        }catch (error) {
            throw new Error(error);
            
        }
    }


    getMovieByCategory = async params =>{
        try{
            const response = await api.get (`/movies/?category_id=${params}`)
            return response.data.results
        }catch (error) {
            throw new Error(error);
            
        }
    }



}


