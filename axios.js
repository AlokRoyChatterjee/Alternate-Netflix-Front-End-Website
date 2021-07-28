import axios from 'axios';



const instance = axios.create({
	url: 'https://api.themoviedb.org/3'      //getting movie info from database API
});

export default instance;
