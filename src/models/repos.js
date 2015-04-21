import Collection from 'ampersand-rest-collection'
import Repo from './repo'
import ajaxConfig from '../helpers/github-api-mixin.js'

export default Collection.extend(ajaxConfig, {
  model: Repo,

  url: 'https://api.github.com/user/repos'
})
