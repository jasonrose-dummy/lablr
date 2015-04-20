import styles from './styles/main.styl'
import Router from './router.js'
import app from 'ampersand-app'

app.extend({
  init() {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
