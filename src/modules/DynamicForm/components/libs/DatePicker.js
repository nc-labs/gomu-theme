import React, { useCallback, useRef } from 'react'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import { TextField, dialogActionsClasses } from '@mui/material'
import { IconButton } from 'components'
import { useController, useFormContext } from 'react-hook-form'

/** @type {React.FC<DatePickerProps>} */
const DatePicker = ({ name, label, inputFormat = 'dd/MM/yyyy', onChange, ...props }) => {
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

  const onDateChange = useCallback(
    (date) => {
      setValue(date)
      if (typeof onChange !== 'function') return

      onChange(date)
    },
    [setValue, onChange]
  )

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
              name="calendar"
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
    [invalid, error, input.current]
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        {...{ ...props, label, inputFormat, onBlur, value, ref, renderInput }}
        onChange={onDateChange}
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

export default React.memo(DatePicker)

/** @typedef {import('@mui/lab/MobileDatePicker').MobileDatePickerProps & {name: string}} DatePickerProps */
