import React from 'react'

import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material'
import { Controller } from 'react-hook-form'

/**
 * @typedef {Omit<import('react-hook-form').UseControllerProps, 'render'>} ControllerProps
 * @typedef {Omit<import('@mui/material').FormControlLabelProps, 'control' | 'label'>} FormControlLabelProps
 * @typedef {import('@mui/material').CheckboxProps} CheckboxProps
 * @typedef {CheckboxProps & {labelProps?: FormControlLabelProps, checkboxProps?: CheckboxProps}} CheckboxProps
 * @type {React.ElementType<ControllerProps & CheckboxProps>}
 */
const Checkbox = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  label,
  onChange,
  ...props
}) => (
  <Controller
    name={name}
    rules={rules}
    shouldUnregister={shouldUnregister}
    defaultValue={defaultValue ?? false}
    control={control}
    render={({ field, fieldState: { invalid } }) => (
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            {...props}
            {...field}
            onChange={(event, checked) => {
              field.onChange(event, checked)

              if (typeof onChange !== 'function') return
              onChange(event, checked)
            }}
          />
        }
        sx={[
          invalid && {
            '& *': {
              color: 'error.main',
            },
          },
          {
            ml: 0,
            mr: label ? 3 : 0,
          },
        ]}
      />
    )}
  />
)

export default React.memo(Checkbox)
