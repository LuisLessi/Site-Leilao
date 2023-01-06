import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bis365.com.br/bid365'
  });

  export default {
    allCities() {
        return api.get('/api/v1/cities')
    }
  }