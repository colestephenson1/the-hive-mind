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
      cards: [],
      filtered: [],
      error: false,
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    fetch('https://api.scryfall.com/cards/search?q=c%3Ablue')
    .then(response => {
      if(!response.ok) {
        throw new Error()
      } else {
        this.setState({error: false})
        return response.json()
      }
    })
    .then(data => {
      const definedCards = data.data.filter(card => card.image_uris)
      this.setState({cards: definedCards})

    })
    .catch(error => {
      this.setState({error: true, errorMessage: 'Error 404. The data could not be fetched. Please reload and try again'})
    })
  }


  filterByType = (type) => {
    const filteredCards = this.state.cards.filter(card => card.type_line.includes(type))
    this.setState({filtered: filteredCards})
  }

  clearState = () => {
    this.setState({filtered: []})
  }

  render() {
    return (
      <div className="App">
        <Header clearState={this.clearState}/>
        <Switch>
          {(this.state.error && <h4 className="error">{this.state.errorMessage}</h4>)}
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route exact path='/tempo' render={() => <Tempo/>}/>
          <Route exact path='/control' render={() => <Control/>}/>
          <Route exact path='/combo' render={() => <Combo/>}/>
          <Route exact path='/cardrepo' render={() => <CardRepo cards={this.state.cards} filteredCards={this.state.filtered} filterByType={this.filterByType}/>}/>
          <Route exact path='/guides' render={() => <Guides/>}/>
          <Route render={() => <Error/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
