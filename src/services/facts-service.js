import axios from 'axios';

class FactsService {
    get(query = 'code') {
        return axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`).then(response => (response.data)).catch(error => (error));
    };
}

export default new FactsService();

