import React, { useCallback } from 'react'

import { Autocomplete, TextField } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

/** @type {React.FC<SelectProps>} */
const Select = ({ name, label, placeholder, options = [], multiple = false, ...props }) => {
  const { control } = useFormContext()

  const {
    field: { onChange: setValue, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: multiple ? [] : null,
  })

  const onChange = useCallback(
    (_event, value) => {
      setValue(value)
      if (typeof props.onChange !== 'function') return

      props.onChange(value)
    },
    [props.onChange]
  )

  const isOptionEqualToValue = useCallback(
    (opt, val) =>
      typeof props.isOptionEqualToValue === 'function'
        ? props.isOptionEqualToValue(opt, val)
        : JSON.stringify(opt) === JSON.stringify(val),
    [props.isOptionEqualToValue]
  )

  const renderInput = useCallback(
    (params) => (
      <TextField
        {...params}
        name={name}
        label={label}
        placeholder={placeholder || label}
        error={Boolean(invalid)}
        helperText={error?.message || ''}
        InputLabelProps={{
          shrink: true,
          ...params.InputLabelProps,
        }}
      />
    ),
    [name, label, placeholder, invalid, error]
  )

  return (
    <>
      <Autocomplete
        {...{
          ...props,
          onBlur,
          value,
          ref,
          options,
          multiple,
          onChange,
          renderInput,
          isOptionEqualToValue,
        }}
        ChipProps={{
          size: 'small',
        }}
        classes={{
          popper: 'rounded-2 fixed z-drawer shadow-md',
          ...props.classes,
        }}
      />
    </>
  )
}

export default React.memo(Select)

/**
 * @typedef {import('@mui/material').AutocompleteProps} MuiAutocompleteProps
 * @typedef {Omit<MuiAutocompleteProps, 'renderInput'> & { name: string, label: string, placeholder?: string, }} SelectProps
 */
