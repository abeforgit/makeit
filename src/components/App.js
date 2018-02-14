import React from 'react';
import '../App.css';
import Header from './Header'
import { Route } from 'react-router-dom'
import LoginPage from '../routes/Register/components/LoginPage'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          <Route path="/register" component={LoginPage}/>
        </div>
      </div>
    );
  }
}

export default App;
