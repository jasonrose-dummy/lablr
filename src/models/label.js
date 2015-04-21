import Model from 'ampersand-model'
import ajaxConfig from '../helpers/github-api-mixin'

export default Model.extend(ajaxConfig, {
  idAttribute: 'name',

  props: {
    url: 'string',
    name: 'string',
    color: 'string'
  }
})
