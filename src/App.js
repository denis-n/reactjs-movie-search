import React, { Component } from 'react';
import logo from './green_app_icon.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <table className="header">
          <tbody>
            <tr>
              <td className="header-logo">
                <img 
                  alt="icon" 
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

      </div>
    );
  }
}

export default App;
