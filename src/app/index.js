import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

/**
 * Import the modules and components
 */
import Home from './modules/Home'
import Page404 from './common/components/Page404'

/**
 * Render the application
 */
render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route component={Page404}/>
    </Switch>
  </HashRouter>,
  document.getElementById('app')
)
