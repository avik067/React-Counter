// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {counterValue: 0}
  Click = () => {
    this.setState(previousState => {
      console.log('Hi')
      return {counterValue: previousState.counterValue + 1}
    })
  }

  render() {
    const {counterValue} = this.state
    return (
      <div className="div">
        <div>
          <h1>
            The Button has been clicked <span>{counterValue}</span> times
          </h1>
          <p>Click the button to increase the count!</p>
          <div>
            <button className="btn" onClick={this.Click}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
