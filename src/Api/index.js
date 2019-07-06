import apisauce from 'apisauce';

const create = (baseURL = 'https://example-test-6fc17.firebaseio.com/posts/') => {
    const api = apisauce.create({
        baseURL,
        timeout: 10000
    });
    return {
        getPosts: () => api.get('.json'),
        createPost: (data) => api.put(`${data.id}.json`, data),
        updatePosts: (id, data) => api.patch(`${id}.json`, data),
        deletePosts: (id) => api.delete(`${id}.json`)
    }
};
export default {
    create
}