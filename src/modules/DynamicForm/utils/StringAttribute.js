import FormAttribute from './FormAttribute'

export default class StringAttribute extends FormAttribute {
  type = 'string'

  /**
   * @param {object} validations
   * @param {boolean} [validations.required]
   * @param {number} [validations.minLen]
   * @param {number} [validations.maxLen]
   * @param {RegExp} [validations.pattern]
   */
  setValitdation = (validations) => {
    const { required = false, minLen = 0, maxLen = Infinity, pattern } = validations
    this.validations = { required, minLen, maxLen, pattern }
    return this
  }
}
