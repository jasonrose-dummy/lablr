import Router from 'ampersand-router'
import React from 'react'
import Public from './pages/public'
import Repos from './pages/repos'
import Layout from './layout'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  _renderPage(Page, options) {
    const Main = (
      <Layout>
        <Page />
      </Layout>
    )
    React.render(Main, document.body)
  },

  public() {
    React.render(<Public />, document.body)
  },

  repos() {
    this._renderPage(Repos)
  }
})
