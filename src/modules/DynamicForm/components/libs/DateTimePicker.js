import React, { useCallback, useEffect, useRef, useState } from 'react'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { default as MuiDateTimePicker } from '@mui/lab/MobileDateTimePicker'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { TextField, dialogActionsClasses, Tab } from '@mui/material'
import { IconButton, Icon } from 'modules/components'
import { useController, useFormContext } from 'react-hook-form'

const ToolbarComponent = React.memo(({ setOpenView, openView }) => {
  const [value, setValue] = useState(openView)

  const handleChange = useCallback(
    (_event, newValue) => {
      setValue(newValue)
      setOpenView(newValue)
    },
    [setOpenView]
  )

  useEffect(() => {
    if (!['day', 'hours'].includes(openView)) return

    setValue(openView)
  }, [openView])

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
        <Tab label={<Icon name="calendar" />} value="day" sx={{ width: '50%' }} />
        <Tab label={<Icon name="clock" />} value="hours" sx={{ width: '50%' }} />
      </TabList>
    </TabContext>
  )
})

/**
 * @type {React.FC<DateTimePickerProps>}
 */
const DateTimePicker = ({ name, label, inputFormat = 'dd/MM/yyyy HH:mm', onChange, ...props }) => {
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
    (newValues) => {
      setValue(newValues)
      if (typeof onChange !== 'function') return

      onChange(newValues)
    },
    [onChange, setValue]
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
    [invalid, error, input.current, inputFormat]
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDateTimePicker
        {...{ ...props, onBlur, value, ref, label, inputFormat, ToolbarComponent, renderInput }}
        onChange={onDateChange}
        ampm={false}
        disableCloseOnSelect={false}
        InputAdornmentProps={{
          sx: { '& button': { mr: 0 } },
        }}
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

export default React.memo(DateTimePicker)

/**
 * @typedef {import('@mui/lab/MobileDateTimePicker').MobileDateTimePickerProps & {name: string}} DateTimePickerProps
 */
