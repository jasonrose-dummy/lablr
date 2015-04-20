import React from 'react'

export default React.createClass({
  render() {
    return (
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
    )

  }
});
