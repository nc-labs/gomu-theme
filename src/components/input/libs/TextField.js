import React from 'react'

import { TextField as MuiTextField } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

/**
 * @typedef {Omit<import('@mui/material').TextFieldProps, | 'error' | 'helperText'>} TextFieldProps
 * @type {React.ElementType<TextFieldProps>}
 */
const TextField = ({ name, label, placeholder, onChange, ...props }) => {
  const { control } = useFormContext()

  const {
    field: { onChange: handleInputChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: '',
  })

  return (
    <MuiTextField
      {...props}
      {...{ onBlur, value, ref }}
      name={name}
      error={Boolean(invalid)}
      helperText={error?.message || ''}
      label={label}
      placeholder={placeholder || label}
      onChange={(event) => {
        handleInputChange(event)
        if (typeof onChange !== 'function') return

        onChange(event)
      }}
    />
  )
}

export default React.memo(TextField)
