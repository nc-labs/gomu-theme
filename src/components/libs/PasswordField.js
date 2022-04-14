import React from 'react'

// import { Icon } from '@components/data-display'
import { TextField, IconButton } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

/**
 * @type {React.ElementType<PasswordFieldProps>}
 */
const PasswordField = ({ name, label, placeholder, InputProps, onChange, ...props }) => {
  const [type, setType] = React.useState('password')

  const { control } = useFormContext()

  const {
    field: { onChange: handleInputChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: '',
  })

  const endAdornment = React.useMemo(() => {
    const isPassword = type === 'password'

    return (
      <IconButton
        onClick={() => setType(isPassword ? '' : 'password')}
        sx={isPassword ? {} : { '& svg': { color: (theme) => theme.palette.primary.main } }}
      >
        {/* <Icon name={isPassword ? 'eye' : 'eye-slash'} regular fontSize="small" /> */}
      </IconButton>
    )
  }, [type])

  return (
    <TextField
      {...props}
      {...{ onBlur, value, ref }}
      name={name}
      error={Boolean(invalid)}
      helperText={error?.message || ''}
      label={label}
      placeholder={placeholder || label}
      InputProps={{
        ...InputProps,
        endAdornment,
      }}
      type={type}
      onChange={(event) => {
        handleInputChange(event)
        if (typeof onChange !== 'function') return
        onChange(event)
      }}
    />
  )
}

export default React.memo(PasswordField)

/**
 * @typedef {Omit<import('@mui/material').TextFieldProps, error' | 'helperText'>} PasswordFieldProps
 */
