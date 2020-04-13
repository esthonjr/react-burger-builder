import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ejr.firebaseio.com/'
});

export default instance;