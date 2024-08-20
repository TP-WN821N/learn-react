import React, { Component } from 'react'

export default class extends Component {
  state = {
    count: 0
  }
  incresCount = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }
  decresCount = () => {
    const { count } = this.state
    this.setState({
      count: count - 1
    })
  }
  render() {
    const { count } = this.state
    return (
      <div className='container'>
        <div className='d-flex gap-2 mt-3'>
          <button className='btn btn-info text-white' onClick={this.incresCount}>+</button>
          <p className='fs-1'>{count}</p>
          <button className='btn btn-danger' onClick={this.decresCount}>-</button>
        </div>
      </div>
    )
  }
}
