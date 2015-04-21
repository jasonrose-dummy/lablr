import React from 'react'
import reactMixin from 'ampersand-react-mixin'
import Label from '../components/label'

export default React.createClass({
  mixins: [reactMixin],

  render() {
    const {repo, labels} = this.props
    return (
      <div className="container">
        <h1>{repo.name} Labels</h1>
        <p>Create New Label</p>
        <div>
          {labels.map((label) =>
            <Label key={label.name} label={label} />
          )}
        </div>
      </div>
    )
  }

})
