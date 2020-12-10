import React, { Component } from 'react';

class Like extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <p><b>Likes:</b> {this.state.count}</p>

        <button onClick={(e) => {
          this.increment()
        }}>&#128077;</button>

        <button onClick={(e) => {
          this.decrement()
        }}>&#128078;</button>
      </div>
    )
  }
}

export default Like