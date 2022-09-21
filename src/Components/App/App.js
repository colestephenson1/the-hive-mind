import React, {Component} from 'react'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import Tempo from '../Tempo/Tempo'
import Control from '../Control/Control'
import Combo from '../Combo/Combo'
import CardRepo from '../CardRepo/CardRepo'
import Guides from '../Guides/Guides'
import Error from '../Error/Error'
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount = () => {
    fetch('https://api.scryfall.com/cards/search?q=c%3Ablue')
    .then(response => response.json())
    .then(data => this.setState({cards: data.data}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route exact path='/tempo' render={() => <Tempo/>}/>
          <Route exact path='/control' render={() => <Control/>}/>
          <Route exact path='/combo' render={() => <Combo/>}/>
          <Route exact path='/cardrepo' render={() => <CardRepo cards={this.state.cards}/>}/>
          <Route exact path='/guides' render={() => <Guides/>}/>
          <Route render={() => <Error/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
