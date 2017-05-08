import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

/**
 * Home component
 */
class Home extends Component {

  /**
   * render
   * @return {Home} markup
   */
  render () {
    return (
      <DocumentTitle title='Home'>
        <h1>Home</h1>
      </DocumentTitle>
    )
  }
}

export default Home
