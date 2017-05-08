import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Page404 ({ location }) {
  return <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
    <Link to="/">Go to home page</Link>
  </div>
}

Page404.propTypes = {
  location: PropTypes.object
}

export default Page404
