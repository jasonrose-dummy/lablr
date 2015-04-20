import Router from 'ampersand-router'
import React from 'react'
import Public from './pages/public'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public() {
    React.render(<Public />, document.body)
  },

  repos() {
    console.log('repos page here')
  }
})
