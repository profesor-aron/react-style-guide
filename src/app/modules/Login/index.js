import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Button, Form } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.css'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

/**
 * Login component
 */
class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, { value }) {
    this.setState({ value }) 
  }

  /**
   * render
   * @return {Login} markup
   */
  render () {

    const { value } = this.state

    return (
      <DocumentTitle title='Login'>
        <div>
          <h1>Login</h1>

          <Button>
            Click Here
          </Button>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button
            color='red'
            content='Like'
            icon='heart'
            label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
          />

          <Button
            basic
            color='blue'
            content='Fork'
            icon='fork'
            label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '1,048' }}
          />

          <Button positive>Positive Button</Button>

          <Form>
            <Form.Group widths='equal'>
              <Form.Input label='First name' placeholder='First name' />
              <Form.Input label='Last name' placeholder='Last name' />
              <Form.Select label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group inline>
              <label>Size</label>
              <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
              <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
              <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
            </Form.Group>
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Form.Button>Submit</Form.Button>
          </Form>

        </div>
      </DocumentTitle>
    )
  }
}

export default Login
