import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{bands}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({bands: state.bands})

const mapDispatchToProps = dispatch => (
  {addBand: band => dispatch({type: 'ADD_BAND', band})}
)

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
