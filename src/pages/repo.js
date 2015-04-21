import React from 'react'
import reactMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [reactMixin],

  render() {
    const {repo, labels} = this.props
    return (
      <div className="container">
        <h1>{repo.name} Labels</h1>
        <p>Create New Label</p>
        <ul>
          {labels.map((label) =>
            <li key={label.name}>{label.name}</li>
          )}
        </ul>
      </div>
    )
  }

})
