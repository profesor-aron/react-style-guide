import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Page404 ({ location }) {
  return <div>
    <h3>
    	No match for <code>{location.pathname}</code>
  	</h3>
  	<Link to="/">Go to home page</Link>
  </div>
}

export default Page404
