import React, { useEffect } from 'react'

import { Button, Stack } from '@mui/material'
import { TextField } from 'modules/DynamicForm/components'
import { useForm, FormProvider } from 'react-hook-form'

import todoPages from '../todoPages'

const BookDetails = () => {
  const detailsForm = useForm()
  const { data: todo } = todoPages.useRecordDetails()

  const {
    saveRecordMutation: { mutate: saveRecord },
  } = todoPages.useRecordMutations()

  const onSubmit = detailsForm.handleSubmit((values) => saveRecord(values))

  useEffect(() => {
    detailsForm.reset(todo)
  }, [JSON.stringify(todo)])

  return (
    <>
      <FormProvider {...detailsForm}>
        <Stack spacing={3}>
          <TextField name="title" label="Title" />
          <Button onClick={onSubmit}>Submit</Button>
        </Stack>
      </FormProvider>
    </>
  )
}

export default React.memo(BookDetails)
