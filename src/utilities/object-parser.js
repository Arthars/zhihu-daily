import _ from 'lodash'
export default {
  toBoolean: function (value) {
    if (typeof value === 'string') {
      return /^(true|t|yes|y|1)$/i.test(value.trim())
    }

    if (typeof value === 'number') {
      return value === 1
    }

    if (typeof value === 'boolean') {
      return value
    }

    return false
  },
  toCamelCase (obj) {
    return this.mapKeysDeepLodash(obj, (v, k) => {
      return _.camelCase(k)
    })
  },
  mapKeysDeepLodash (obj, cb) {
    if (_.isUndefined(obj)) {
      throw new Error(`map-keys-deep-lodash expects an object but got ${typeof obj}`)
    }
    if (_.isArray(obj)) {
      return _.map(obj, (v, k) => {
        return this.mapKeysDeepLodash(v, cb)
      })
    }
    if (!_.isObject(obj)) {
      return obj
    }
    let res = {}
    obj = _.mapKeys(obj, cb)
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let val = obj[key]
        if (_.isObject(val)) {
          res[key] = this.mapKeysDeepLodash(val, cb)
        } else {
          res[key] = val
        }
      }
    }
    return res
  }
}
