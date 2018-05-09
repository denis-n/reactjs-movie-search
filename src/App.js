import React, { Component } from 'react';
import Movie from './Movie';
import logo from './green_app_icon.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);

    this.movies = [
      {
        id: 0,
        title: "Avengers",
        overview: "description",
        poster_url: "https://image.tmdb.org/t/p/original/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg"
      },
      {
        id: 1,
        title: "Avengers 2",
        overview: "description 2",
        poster_url: "https://image.tmdb.org/t/p/original/iHy5sUxjWc5IQ61sMUTqoJRVgy9.jpg"
      }
    ];

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

        {this.movies.map((movie) => <Movie key={movie.id} data={movie} />)}

      </div>
    );
  }
}

export default App;
