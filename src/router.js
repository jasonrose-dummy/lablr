import Router from 'ampersand-router'
import React from 'react'
import Public from './pages/public'
import Repos from './pages/repos'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public() {
    React.render(<Public />, document.body)
  },

  repos() {
    React.render(<Repos />, document.body)
  }
})
