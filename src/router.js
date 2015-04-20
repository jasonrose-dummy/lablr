import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import Public from './pages/public'
import Repos from './pages/repos'
import Layout from './layout'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?code=:code': 'authCallback'
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
  },

  login() {
    const opts = {
      scope: 'user,repo',
      redirect_uri: `${window.location.origin}/auth/callback`,
      client_id: 'f8dd69187841cdd22a26'
    }
    window.location.href = `https://github.com/login/oauth/authorize?${qs.stringify(opts)}`
  },

  authCallback(code) {
    console.log('code from redirect', code)
  }
})
