import { http } from './config'

export default {
    createPost: (auction) => {
        return http.post('api/v1/shots', auction) //POST 
      },
    }
