import axios from 'axios';

const apiImages = axios.create({
    baseURL: `https://webservice.fanart.tv/v3/movies`
});

export default apiImages;