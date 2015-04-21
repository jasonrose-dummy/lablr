import Model from 'ampersand-model'
import ajaxConfig from '../helpers/github-api-mixin'
import Labels from './labels'

export default Model.extend(ajaxConfig, {
  props: {
    id: 'number',
    name: 'string',
    full_name: 'string',
    description: 'string'
  },

  derived: {
    appUrl: {
      deps: ['full_name'],
      fn() {
        return `/repos/${this.full_name}`
      }
    }
  },

  collections: {
    labels: Labels
  },

  url() {
    return `https://api.github.com/repos/${this.full_name}`
  },

  fetch() {
    Model.prototype.fetch.apply(this, arguments)
    this.labels.fetch()
  }
})
