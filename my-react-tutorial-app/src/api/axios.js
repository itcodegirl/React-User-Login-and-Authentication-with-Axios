import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:4000'
});
// ***  may need to update baseURL  