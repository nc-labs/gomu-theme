import React from 'react'

import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import NumberFormat from 'react-number-format'

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  { onChange, ...props },
  ref
) {
  return (
    <NumberFormat
      {...props}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      thousandSeparator
      isNumericString
    />
  )
})

/**
 * @type {React.ElementType<ControllerProps & NumberFieldProps>}
 */
const NumberField = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  label,
  placeholder,
  InputProps,
  onChange,
  ...props
}) => (
  <Controller
    name={name}
    rules={rules}
    shouldUnregister={shouldUnregister}
    defaultValue={defaultValue ?? ''}
    control={control}
    render={({ field, fieldState: { error, invalid } }) => (
      <TextField
        {...props}
        {...field}
        name={name}
        error={Boolean(invalid)}
        helperText={error?.message || ''}
        label={label}
        placeholder={placeholder || label}
        InputProps={{
          ...InputProps,
          inputComponent: NumberFormatCustom,
        }}
        onChange={(event) => {
          field.onChange(event)

          if (typeof onChange !== 'function') return

          onChange(event)
        }}
      />
    )}
  />
)

export default React.memo(NumberField)

/**
 * @typedef {Omit<import('react-hook-form').UseControllerProps, 'render'>} ControllerProps
 * @typedef {Omit<import('@mui/material').TextFieldProps, 'name' | 'error' | 'helperText'>} NumberFieldProps
 */
