import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nuxt-blog-85ff7-default-rtdb.firebaseio.com',
});

export default instance;
