import React, { useCallback, useRef } from 'react'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { default as MuiTimePicker } from '@mui/lab/MobileTimePicker'
import { TextField, dialogActionsClasses } from '@mui/material'
import { IconButton } from 'modules/components'
import { useController, useFormContext } from 'react-hook-form'
/**
 * @type {React.FC<TimePickerProps>}
 */
const TimePicker = ({ name, label, inputFormat = 'HH:mm', onChange, ...props }) => {
  const { control } = useFormContext()
  const input = useRef(null)

  const {
    field: { onChange: setValue, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: null,
  })

  const onDateChange = useCallback((newValues) => {
    setValue(newValues)
    if (typeof onChange !== 'function') return

    onChange(newValues)
  }, [])

  const renderInput = useCallback(
    (params) => (
      <TextField
        {...params}
        error={Boolean(invalid)}
        helperText={error?.message || ''}
        placeholder={inputFormat.toLowerCase()}
        InputProps={{
          ...params.InputProps,
          ref: input,
          endAdornment: (
            <IconButton
              name="clock"
              onClick={() => input.current?.querySelector('input').click()}
            />
          ),
        }}
        InputLabelProps={{
          shrink: true,
          ...params.InputLabelProps,
        }}
      />
    ),
    [invalid, error, inputFormat, input.current]
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiTimePicker
        {...{ ...props, onBlur, value, ref, label, inputFormat, renderInput }}
        onChange={onDateChange}
        ampm={false}
        InputAdornmentProps={{
          sx: { '& button': { mr: 0 } },
        }}
        showToolbar={false}
        disableCloseOnSelect={false}
        DialogProps={{
          sx: {
            [`& .${dialogActionsClasses.root}`]: {
              display: 'none',
            },
          },
        }}
      />
    </LocalizationProvider>
  )
}

export default React.memo(TimePicker)

/**
 * @typedef {import('@mui/lab/MobileTimePicker').MobileTimePickerProps & {name: string}} TimePickerProps
 */
