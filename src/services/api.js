import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.trakt.tv',
    headers: {
        'Content-type' : 'application/json',
        'trakt-api-key' : 'ea560113f3898cca33e0ef6f4626227e66ee354e937de30417c6fc1079aacfb5',
        'trakt-api-version' : 2
      }
});

export default api;