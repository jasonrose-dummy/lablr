import React from 'react'
import LocalLinks from 'local-links'
import app from 'ampersand-app'
import InternalNav from '../components/internal-nav'

export default React.createClass({
  render() {
    return (
      <InternalNav>
        <div className="container">
          <header role="banner">
            <h1>Lablr</h1>
          </header>
          <div>
            <p>We label stuff for you, because we can&trade;</p>
            <a href="/login" className="button button-large">
              <span className="mega-octicon octicon-mark-github"> Login with GitHub</span>
            </a>
          </div>
        </div>
      </InternalNav>
    )
  }
})
