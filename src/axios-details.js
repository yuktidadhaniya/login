import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-b5d8c-default-rtdb.firebaseio.com/',
});

export default instance;
                   