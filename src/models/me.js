import Model from 'ampersand-model'
import Repos from './repos'
import ajaxConfig from '../helpers/github-api-mixin.js'

export default Model.extend(ajaxConfig, {
  initialize() {
    if(localStorage.token) {
      this.token = localStorage.token
    }
    this.on('change:token', () => {
        if (!this.token) {
          delete localStorage.token
        } else {
          localStorage.token = this.token
        }
      }
    )
  },

  url: 'https://api.github.com/user',

  props: {
    token: 'string',
    login: 'string'
  },

  derived: {
    isLoggedIn: {
      deps: ['token'],
      fn() {
        return !!this.token
      }
    }
  },

  collections: {
    repos: Repos
  },

  logout() {
    localStorage.clear()
  }
})
