import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: 'Client-ID 188488376d31b81a3dd132219fb7929d8ca8e400c168f3af9b72886c3547efd0'
  }

});