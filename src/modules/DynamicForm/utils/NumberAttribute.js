import FormAttribute from './FormAttribute'

export default class NumberAttribute extends FormAttribute {
  type = 'number'

  /**
   * @param {object} validations
   * @param {boolean} [validations.required]
   * @param {number} [validations.min]
   * @param {number} [validations.max]
   */
  setValitdation = (validations) => {
    const { required = false, min = -Infinity, max = Infinity } = validations
    this.validations = { required, min, max }
    return this
  }
}
