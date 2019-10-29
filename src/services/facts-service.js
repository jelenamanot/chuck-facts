import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io';

class FactsService {
    get(query) {
        return axios.get(`${BASE_URL}/jokes/search?query=${query}`).then(response => (response.data)).catch(error => (error));
    };

    getSingle(factId) {
        return axios.get(`${BASE_URL}/jokes/${factId}`).then(response => (response.data)).catch(error => (error));
    };

    getRandom() {
        return axios.get(`${BASE_URL}/jokes/random`).then(response => (response.data)).catch(error => (error));
    }
}

export default new FactsService();

