import * as yup from 'yup'

import { NumberField, TextField } from '../components'

/**
 * @type {TAttributeFunction}
 */
export const getYupSchema = (type, validations = {}) => {
  const yupSchema = (() => {
    switch (type) {
      case 'string':
        return (() => {
          const { required = false, minLen = 0, maxLen = Infinity, pattern } = validations
          const yupSchema = (required ? yup.string().required() : yup.string())
            .min(minLen || -Infinity)
            .max(maxLen || Infinity)
            .matches(pattern || /[\s\S]*/)

          return yupSchema
        })()
      case 'number':
        return (() => {
          const { required = false, min = -Infinity, max = Infinity } = validations
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
  })()

  const Component = (() => {
    switch (type) {
      case 'string':
        return TextField
      case 'number':
        return NumberField
      default:
        return undefined
    }
  })()

  return {
    yupSchema,
    Component,
  }
}

/**
 * @typedef {import('react').default} React
 * @typedef {import('../components/libs/TextField').TextFieldProps} TextFieldProps
 * @typedef {import('../components/libs/NumberField').NumberFieldProps} NumberFieldProps
 */

/**
 * @typedef {'string' | 'number'} TType
 */

/**
 * @template {TType} T
 * @typedef {T extends "string" ? {required: boolean, minLen?: number, maxLen?: number, pattern?: RegExp} : undefined} TStringValidation
 */

/**
 * @template {TType} T
 * @typedef {T extends "number" ? {required: boolean, min?: number, max?: number} : undefined} TNumberValidation
 */

/**
 * @template {TType} T
 * @typedef {T extends 'string' ? React.FC<TextFieldProps> : undefined} TStringComponent
 */

/**
 * @template {TType} T
 * @typedef {T extends 'number' ? React.FC<NumberFieldProps> : undefined} TNumberComponent
 */

/**
 * @template {TType} T
 * @typedef {TStringComponent<T> | TNumberComponent<T>} TComponent
 */

/**
 * @template {TType} T
 * @typedef {TStringValidation<T> | TNumberValidation<T>} TValidation
 */

/**
 * @typedef {<T extends TType>(type: T, validations?: TValidation<T>) => {Component: TComponent<T>, yupSchema: any}} TAttributeFunction
 */

const string = getYupSchema('number')
