import Model from 'ampersand-model'
import xhr from 'xhr'
import ajaxConfig from '../helpers/github-api-mixin'

export default Model.extend(ajaxConfig, {
  idAttribute: 'name',

  props: {
    url: 'string',
    name: 'string',
    color: 'string'
  },

  session: {
    isEditing: 'boolean'
  },

  update(newAttributes) {
    const old = this.attributes

    this.set(newAttributes)

    xhr({
      url: this.url,
      json: newAttributes,
      method: 'PATCH',
      headers: ajaxConfig.ajaxConfig().headers
    }, (err) => {
      if(err) {
        this.set(old)
      }
    })
  }
})
