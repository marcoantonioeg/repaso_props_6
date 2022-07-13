import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <a href={this.props.url} target="_blank">Google</a>
      </div>
    )
  }
}
