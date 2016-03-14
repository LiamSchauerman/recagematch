/* @flow */
import React, {Component} from 'react'

import Cage from '../../components/Cage/Cage';
export class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Cagematch</h1>
        <Cage />
      </div>
    )
  }
}

export default HomeView
