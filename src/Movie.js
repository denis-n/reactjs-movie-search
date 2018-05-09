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
                        src={movie.poster_src} 
                        width="100" 
                    />
                </td>
                <td>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <a 
                    target="_blank"
                    href={movie.url}>View</a>
                </td>
              </tr>
            </tbody>
          </table>)
    }
}

export default Movie;