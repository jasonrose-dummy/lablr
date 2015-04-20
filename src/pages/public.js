import React from 'react'
import LocalLinks from 'local-links'
import app from 'ampersand-app'

export default React.createClass({
  onClick(event) {
    const pathname = LocalLinks.getLocalPathname(event)
    if(pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },

  render() {
    return (
      <div className="container" onClick={this.onClick}>
        <header role="banner">
          <h1>Lablr</h1>
        </header>
        <div>
          <p>We label stuff for you, because we can&trade;</p>
          <a href="/repos" className="button button-large">
            <span className="mega-octicon octicon-mark-github"> Login with GitHub</span>
          </a>
        </div>
      </div>
    )

  }
});
