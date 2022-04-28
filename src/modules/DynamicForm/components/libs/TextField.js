import React, { useCallback } from 'react'

import { TextField as MuiTextField } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

/**
 * @type {React.FC<TextFieldProps>}
 */
const TextField = ({ name, label, placeholder, onChange, InputLabelProps, ...props }) => {
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
    <MuiTextField
      {...{ ...props, onBlur, value, ref, label, name }}
      error={Boolean(invalid)}
      helperText={error?.message || ''}
      placeholder={placeholder || label}
      onChange={handleInputChange}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps,
      }}
    />
  )
}

export default React.memo(TextField)

/**
 * @typedef {Omit<import('@mui/material').TextFieldProps, | 'error' | 'helperText'>} TextFieldProps
 */
