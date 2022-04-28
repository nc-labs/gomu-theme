import React, { useState, useCallback, useMemo } from 'react'

import { TextField } from '@mui/material'
import { IconButton } from 'modules/components'
import { useController, useFormContext } from 'react-hook-form'

/**
 * @type {React.ElementType<PasswordFieldProps>}
 */
const PasswordField = (props) => {
  const { name, label, placeholder, InputProps, InputLabelProps, onChange, ...rentProps } = props
  const [type, setType] = useState('password')
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

  const endAdornment = useMemo(() => {
    const isPassword = type === 'password'

    return (
      <IconButton
        onClick={() => setType(isPassword ? '' : 'password')}
        name={isPassword ? 'view' : 'hidden'}
      />
    )
  }, [type])

  return (
    <TextField
      {...{ ...rentProps, onBlur, value, ref, type, name, label }}
      error={Boolean(invalid)}
      helperText={error?.message || ''}
      placeholder={placeholder || label}
      InputProps={{
        ...InputProps,
        endAdornment,
      }}
      onChange={handleInputChange}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps,
      }}
    />
  )
}

export default React.memo(PasswordField)

/**
 * @typedef {Omit<import('@mui/material').TextFieldProps, 'error' | 'helperText'>} PasswordFieldProps
 */
