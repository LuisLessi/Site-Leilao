import axios from 'axios'
export const http = axios.create({
    baseURL: 'https://bis365.com.br/bid365'
  })