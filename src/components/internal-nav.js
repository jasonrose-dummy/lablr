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
      <div onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})
