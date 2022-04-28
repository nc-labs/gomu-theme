import React from 'react'
import { TextFieldProps } from '../components/libs/TextField'
import { NumberFieldProps } from '../components/libs/NumberField'

export type TType = 'string' | 'number'

// prettier-ignore
export type TValidationOptions<T extends TType> =
  T extends 'string' ? { required: boolean; minLen?: number; maxLen?: number; pattern?: RegExp }:
  T extends 'number' ? { required: boolean; min?: number; max?: number }:
  undefined

// prettier-ignore
export type TAttributeReturn<T extends TType> =
  T extends 'string' ? { Component: React.FC<TextFieldProps>, yupScheme: any }:
  T extends 'number' ? { Component: React.FC<NumberFieldProps>, yupScheme: any}:
  undefined
