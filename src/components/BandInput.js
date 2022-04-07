// Add BandInput component
import React, { Component } from 'react'

export default class BandInput extends Component {
  state = {name: ''}

  handleChange = e => this.setState({name: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='add band' value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
