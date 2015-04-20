import styles from './styles/main.styl'
import Router from './router.js'

window.app = {
  init() {
    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()