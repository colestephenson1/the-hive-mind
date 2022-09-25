import React, {Component} from 'react'
import './Form.css'



class Form extends Component {
  constructor() {
    super();
    this.state = {
      cardType: ''
    }
  }

  handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
     }

  render() {
    return (
      <div className='form'>
        <select className='card-type' name='cardType' value={this.state.cardType} onChange={event => this.handleChange(event)}>
          <option value='choose-type' defaultValue>SEARCH BY CARD TYPE</option>
          <option value='Creature'>CREATURE</option>
          <option value='Sorcery'>SORCERY</option>
          <option value='Instant'>INSTANT</option>
          <option value='Enchantment'>ENCHANTMENT</option>
          <option value='Artifact'>ARTIFACT</option>
        </select>
        <button className='search-button' onClick={() => this.props.filterByType(this.state.cardType)}>SEARCH</button>
      </div>
    )
  }
}


export default Form;
