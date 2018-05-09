import React, { Component } from 'react';
import Movie from './Movie';
import logo from './green_app_icon.svg';
import noposter from './noposter.png'
import './App.css';

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=";

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount(){

    this.performSearch();
  }


  performSearch(){

    const searchUrl = `${SEARCH_URL}avengers`;

    fetch(searchUrl)
      .then(data => data.json())
      .then(json => {
        
        const movies = [];
        
        json.results.forEach(({id, title, overview, poster_path}) => {

            const poster_src = (poster_path 
                                  ? `https://image.tmdb.org/t/p/w185${poster_path}` 
                                  : noposter);

            movies.push({
              id,
              title,
              overview,
              poster_src
            });
        });

        this.setState({
          movies
        });

      })
      .catch(error => alert('Failed to fetch data'));
  }


  render() {
    return (
      <div className="App">
        
        
        <table className="header">
          <tbody>
            <tr>
              <td className="header-logo">
                <img 
                  alt="Logo" 
                  src={logo}
                  width="50px"
                />
              </td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="movie-search" placeholder="Enter search term" />

        {this.state.movies.map((movie) => <Movie key={movie.id} data={movie} />)}

      </div>
    );
  }
}

export default App;
