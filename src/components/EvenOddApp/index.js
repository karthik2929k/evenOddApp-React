// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + number}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="para">
          {count % 2 === 0 ? 'Count is Even' : 'Count is Odd'}
        </p>
        <div className="buttons-container">
          <button className="button" onClick={this.onIncrement} type="button">
            Increment
          </button>
        </div>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
