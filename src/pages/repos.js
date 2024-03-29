import React from 'react'
import reactMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [reactMixin],

  render() {
    const {repos} = this.props

    return (
      <div className="container">
        <header role="banner">
          <h1>Repos</h1>
        </header>
        <ul>
          {repos.map((repo) =>
            <li key={repo.id}>
              <a href={repo.appUrl}>{repo.full_name}</a>
            </li>
          )}
        </ul>
      </div>
    )
  }
})
