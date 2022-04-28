import React, { useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { mapValues } from 'lodash'
import { useForm, FormProvider } from 'react-hook-form'
import * as yup from 'yup'

export default class Form {
  onSubmit = undefined
  /**
   * @param {{[key: string]: import('./FormAttribute').default}} schema
   */
  #schema

  /**
   * @param {{[key: string]: import('./FormAttribute').default}} schema
   */
  constructor(schema) {
    this.#schema = schema
  }

  Render = React.memo(() => {
    const formMethods = useForm({
      defaultValues: this.#getDefaultValues(),
      resolver: this.#getYupSchema(),
    })

    useEffect(() => {
      this.onSubmit = formMethods.handleSubmit((values) => {
        console.log('values', values)
      })

      return () => (this.onSubmit = undefined)
    }, [])

    return (
      <FormProvider {...formMethods}>
        {Object.keys(this.#schema).map((attr, index) => {
          const AttributeRender = this.#schema[attr].Render
          return <AttributeRender key={index} name={attr} />
        })}
      </FormProvider>
    )
  })

  #getDefaultValues = () =>
    mapValues(this.#schema, (formAttribute) => {
      switch (formAttribute.type) {
        case 'number':
        case 'string':
          return ''
        case 'boolean':
          return false
        default:
          return null
      }
    })

  #getYupSchema = () =>
    yupResolver(
      yup.object(mapValues(this.#schema, (formAttribute) => formAttribute.getYupSchema()))
    )
}
