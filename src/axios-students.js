import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://assignment-3beea-default-rtdb.firebaseio.com/'
});

export default instance;