import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Button } from 'semantic-ui-react'

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
        <div>
          <h1>Home</h1>
          <Button>
            Click Here
          </Button>
        </div>
      </DocumentTitle>
    )
  }
}

export default Home
