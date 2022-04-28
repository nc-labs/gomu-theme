import React from 'react'

import * as yup from 'yup'

import * as InputComponents from '../components'

export default class FormAttribute {
  #options = {
    label: '',
    placeholder: '',
  }

  validations = {}

  /**
   * @param {string} name
   * @param {'string' | 'number' | 'boolean'} type
   */
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  /**
   * @param {string} label
   */
  setLabel = (label) => {
    this.#options.label = label

    return this
  }

  /**
   * @param {string} placeholder
   */
  setPlaceholder = (placeholder) => {
    this.#options.placeholder = placeholder

    return this
  }

  getYupSchema = () => {
    switch (this.type) {
      case 'string':
        return this.#getYupStringSchema()
      case 'number':
        return this.#getYupNumberSchema()
      default:
        return undefined
    }
  }

  /**
   * @type {React.FC<{name: string}>}
   */
  Render = React.memo(({ name }) => {
    switch (this.type) {
      case 'string':
        return <InputComponents.TextField name={name} label={this.#options.label} />
      case 'number':
        return <InputComponents.NumberField name={name} label={this.#options.label} />
      default:
        return <></>
    }
  })

  #getYupStringSchema = () => {
    const { required = false, minLen = 0, maxLen = Infinity, pattern } = this.validations
    const yupSchema = (required ? yup.string().required() : yup.string())
      .min(minLen || -Infinity)
      .max(maxLen || Infinity)
      .matches(pattern || /[\s\S]*/)

    return yupSchema
  }

  #getYupNumberSchema = () => {
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
  }
}
