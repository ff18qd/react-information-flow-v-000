import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.color !== nextProps.color) {
      this.setState({
        childColor: getReducedColor(nextProps.color)
      })
    }
  }
  
  handleChildClick = () => {
    this.setState({
      
      childColor: getReducedColor(this.props.color)
    })
  }
  
  
  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.handleChildClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick}/>
      </div>
    )
  }
}
