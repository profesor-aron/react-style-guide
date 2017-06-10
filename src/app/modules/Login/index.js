import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Button } from 'semantic-ui-react'

/**
 * Login component
 */
class Login extends Component {

  /**
   * render
   * @return {Login} markup
   */
  render () {
    return (
      <DocumentTitle title='Login'>
        <div>
          <h1>Login</h1>

          <Button>
            Click Here
          </Button>
        </div>
      </DocumentTitle>
    )
  }
}

export default Login
