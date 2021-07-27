import axios from 'axios';



const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'      //getting movie database info
});

export default instance;
