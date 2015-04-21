import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  getInitialState() {
    const {color, name} = this.props.label
    return {
      color,
      name
    }
  },

  edit(e) {
    e.preventDefault()
    const {label} = this.props
    label.isEditing = !label.isEditing
    if(!label.editing) {
      this.setState(this.getInitialState())
    }
  },

  remove(e) {
    e.preventDefault()
  },

  submit(e) {
    e.preventDefault()
    const {label} = this.props
    label.update(this.state)
    label.isEditing = false
  },

  changeName(e) {
    this.setState({
      name: e.target.value
    })
  },

  changeColor(e) {
    this.setState({
      color: e.target.value
    })
  },

  render() {
    const {color, name} = this.state
    const {label} = this.props
    const cssColor = `#${color}`

    if(label.isEditing) {
      return (
        <form className="label" onSubmit={this.submit}>
          <span className="label-color avatar avatar-small avatar-rounded" style={{backgroundColor: cssColor}}>&nbsp;</span>
          <input onChange={this.changeName} name="name" defaultValue={name} />
          <input onChange={this.changeColor} name="color" defaultValue={color} />
          <button type="submit" className="button button-small">Save</button>
          <button onClick={this.edit} type="button" className="button button-small button-unstyled">cancel</button>
        </form>
      )
    } else {
      return (
        <div className="label">
          <span className="label-color" style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{name}</span>
          <span onClick={this.edit} className="octicon octicon-pencil" role="button"></span>
          <span onClick={this.remove} className="octicon octicon-x" role="button"></span>
        </div>
      )
    }
  }
})
