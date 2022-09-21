import React, {Component} from 'react'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: []
    }
  }

  componentDidMount = () => {
    fetch('https://api.scryfall.com/cards/search?q=c%3Ablue')
    .then(response => response.json())
    .then(data => this.setState({songs: data.data}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path='/' render={() => <HomePage/>}/>
      </div>
    )
  }
}

export default App;
