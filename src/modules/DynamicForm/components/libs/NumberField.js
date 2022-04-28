import React, { useCallback } from 'react'

import { TextField } from '@mui/material'
import { useFormContext, useController } from 'react-hook-form'
import NumberFormat from 'react-number-format'

const NumberFormatCustom = React.forwardRef(({ onChange, ...props }, ref) => {
  const onValueChange = useCallback(
    (values) => {
      onChange({ target: { name: props.name, value: values.value } })
    },
    [props.name, onChange]
  )

  return (
    <NumberFormat
      {...props}
      getInputRef={ref}
      onValueChange={onValueChange}
      thousandSeparator
      isNumericString
    />
  )
})

/**
 * @type {React.ElementType<NumberFieldProps>}
 */
const NumberField = (props) => {
  const { name, label, placeholder, InputProps, InputLabelProps, onChange, ...rentProps } = props
  const { control } = useFormContext()

  const {
    field: { onChange: setValue, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control, defaultValue: '' })

  const handleInputChange = useCallback(
    (event) => {
      setValue(event)
      if (typeof onChange !== 'function') return

      onChange(event)
    },
    [onChange, setValue]
  )

  return (
    <TextField
      {...{ ...rentProps, onBlur, value, ref, label, name }}
      error={Boolean(invalid)}
      helperText={error?.message || ''}
      placeholder={placeholder || label}
      InputProps={{
        ...InputProps,
        inputComponent: NumberFormatCustom,
      }}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps,
      }}
      onChange={handleInputChange}
    />
  )
}

export default React.memo(NumberField)

/**
 * @typedef {Omit<import('@mui/material').TextFieldProps, 'error' | 'helperText'>} NumberFieldProps
 */
