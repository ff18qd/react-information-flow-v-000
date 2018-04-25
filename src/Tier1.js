import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }
  
  handleClick = () => { 
    const nextColor = getRandomColor()
    this.setState({
      color: nextColor,
      childColor: getReducedColor(nextColor),
    })
    
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    // onClick={() => {this.setState({color: this.getRandomColor()})}}
    return (
      <div  onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleClick={this.handleClick}/>
        <Tier2 color={this.state.childColor} handleClilck={this.handleClick}/>
      </div>
    )
  }
}
