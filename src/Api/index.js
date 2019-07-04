import apisauce from 'apisauce';

const create = (baseURL = 'https://reqres.in/api/') => {
    const api = apisauce.create({
        baseURL,
        timeout: 10000
    });

    return {
        getPosts: () => api.get('users?page=2'),
        createPost: (data) => api.post('/users/', data),
        updatePosts: (id, data) => api.patch(`/posts/${id}/`, data),
        deletePosts: (id) => api.delete(`/posts/${id}`)
    }
};
export default {
    create
}