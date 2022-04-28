import React, { useCallback } from 'react'

import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material'
import clsx from 'clsx'
import { useFormContext, useController } from 'react-hook-form'

/** @type {React.ElementType<CheckboxProps>} */
const Checkbox = ({ name, label, onChange, ...props }) => {
  const { control } = useFormContext()

  const {
    field: { onChange: setValue, onBlur, value, ref },
    fieldState: { invalid },
  } = useController({ name, control, defaultValue: false })

  const handleInputChange = useCallback(
    (event, checked) => {
      setValue(event, checked)

      if (typeof onChange !== 'function') return
      onChange(event, checked)
    },
    [onChange, setValue]
  )

  return (
    <FormControlLabel
      label={label}
      control={<MuiCheckbox {...{ ...props, onBlur, value, ref }} onChange={handleInputChange} />}
      className={clsx('ml-0', label ? 'mr-3' : 'mr-0')}
      sx={[
        invalid && {
          '& *': {
            color: 'error.main',
          },
        },
      ]}
    />
  )
}

export default React.memo(Checkbox)

/**
 * @typedef {import('@mui/material').CheckboxProps} MuiCheckboxProps
 * @typedef {MuiCheckboxProps & { label: React.ReactNode }} CheckboxProps
 */
