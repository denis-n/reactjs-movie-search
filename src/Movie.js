import React from 'react';

class Movie extends React.Component {

    render () {

        const movie = this.props.data;

        return (<table>
            <tbody>
              <tr>
                <td>
                  <img alt="poster" 
                    className="poster"
                    src={movie.poster_url} 
                    width="100" 
                  />
                </td>
                <td>
                  {movie.title}
                  <p>{movie.overview}</p>
                </td>
              </tr>
            </tbody>
          </table>)
    }
}

export default Movie;