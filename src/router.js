import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import Public from './pages/public'
import Repos from './pages/repos'
import Repo from './pages/repo'
import Layout from './layout'
import Message from './pages/message'

const auth = function(name) {
  return function() {
    if(app.me.isLoggedIn) {
      this[name].apply(this, arguments)
    } else {
      this.redirectTo('/')
    }
  }
}

export default Router.extend({
  routes: {
    '': 'public',
    'repos': auth('repos'),
    'repos/:name/:repoName': auth('repoDetail'),
    'login': 'login',
    'auth/callback?code=:code': 'authCallback',
    'logout': 'logout',
    '*404': 'fourOhFour'
  },

  _renderPage(Page, options = {}) {
    const Main = (
      <Layout me={app.me}>
        <Page {...options}/>
      </Layout>
    )
    React.render(Main, document.body)
  },

  public() {
    React.render(<Public />, document.body)
  },

  repos() {
    this._renderPage(Repos, {repos: app.me.repos})
  },

  repoDetail(name, fullName) {
    const repo = app.me.repos.getByFullName(`${name}/${fullName}`)
    this._renderPage(Repo, {repo, labels: repo.labels})
  },

  login() {
    const opts = {
      scope: 'user,repo',
      redirect_uri: `${window.location.origin}/auth/callback`,
      client_id: 'f8dd69187841cdd22a26'
    }
    window.location.href = `https://github.com/login/oauth/authorize?${qs.stringify(opts)}`
  },

  logout() {
    app.me.logout()
    window.location = '/'
  },

  authCallback(code) {
    this._renderPage(Message, {title: 'Checking GitHub', body: 'Please wait a moment'})
    xhr({
      url: `https://labelr-dev.herokuapp.com/authenticate/${code}`,
      json: true
    }, (err, resp, body) => {
      if(err) {
        console.error(err)
        this._renderPage(Message, {title: 'Oops', body: 'An error happened'})
      } else {
        app.me.token = body.token
        this.redirectTo('/repos')
      }
    })
  },

  fourOhFour() {
    this._renderPage(Message, {title: '404', body: 'Nothing to see here'})
  }
})
