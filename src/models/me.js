import Model from 'ampersand-model'

export default Model.extend({
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

  ajaxConfig() {
    return {
      headers: {
        'Authorization': `token ${this.token}`
      }
    }
  },

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

  logout() {
    localStorage.clear()
  }
})
