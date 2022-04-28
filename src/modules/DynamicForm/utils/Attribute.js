import * as yup from 'yup'

/**
 * @typedef {React.FC<import('../components/libs/TextField').TextFieldProps>} TextField
 * @typedef {React.FC<import('../components/libs/NumberField').NumberFieldProps>} NumberField
 */

/**
 * @typedef {{type: "string", size: , minLen?: number, maxLen?: number, pattern?: RegExp}} TString
 * @typedef {{type: "number", min?: number, max?: number}} TNumber
 * @typedef {TString | TNumber} TAttribute
 */

class Attribute {
  /**
   * @param {TAttribute} configs
   */
  constructor({ type, ...validations }) {
    this.type = type
    this.validations = validations
  }

  getYupSchema = () => {
    switch (this.type) {
      case 'string':
        return (() => {
          const { required = false, minLen = 0, maxLen = Infinity, pattern } = this.validations
          const yupSchema = (required ? yup.string().required() : yup.string())
            .min(minLen || -Infinity)
            .max(maxLen || Infinity)
            .matches(pattern || /[\s\S]*/)

          return yupSchema
        })()
      case 'number':
        return (() => {
          const { required = false, min = -Infinity, max = Infinity } = this.validations
          const yupSchema = yup.lazy((numberValue) => {
            if (numberValue === '') {
              return required ? yup.string().required() : yup.string()
            }

            return (required ? yup.number().required() : yup.number())
              .min(min || -Infinity)
              .max(max || Infinity)
          })

          return yupSchema
        })()
      default:
        return undefined
    }
  }
}

const string = new Attribute({ type: 'number' }).getYupSchema()
