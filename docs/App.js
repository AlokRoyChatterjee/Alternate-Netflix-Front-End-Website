import React from 'react';
import './App.css';
import movies from './movies';
import requests from './requests';

function App() {
	return (
		<div className="app">
			<movies title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
			<movies title="Trending" fetchUrl={requests.fetchTrending} />
			<movies title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<movies title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<movies title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<movies title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<movies title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<movies title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
