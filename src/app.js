import styles from './styles/main.styl'
import Router from './router.js'
import app from 'ampersand-app'
import Me from './models/me'

app.extend({
  init() {
    this.me = new Me()
    this.me.fetch()
    this.router = new Router()
    this.router.history.start()
  }
})

window.app = app

app.init()
