import Collection from 'ampersand-rest-collection'
import Label from './label'
import ajaxConfig from '../helpers/github-api-mixin'

export default Collection.extend(ajaxConfig, {
  model: Label,

  url() {
    return `${this.parent.url()}/labels`
  }
})
