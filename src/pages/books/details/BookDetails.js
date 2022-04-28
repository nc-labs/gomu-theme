import React, { useEffect } from 'react'

import { Button, Stack } from '@mui/material'
import MainContainer from 'layouts/MainLayout/libs/MainContainer'
import { TextField } from 'modules/DynamicForm/components'
import { useForm, FormProvider } from 'react-hook-form'
import todoServices from 'services/todoServices'

const BookDetails = () => {
  const detailsForm = useForm()
  const { data: todo } = todoServices.useRecordDetails()

  const {
    saveRecordMutation: { mutate: saveRecord },
  } = todoServices.useRecordMutations()

  const onSubmit = detailsForm.handleSubmit((values) => saveRecord(values))

  useEffect(() => {
    detailsForm.reset(todo)
  }, [JSON.stringify(todo)])

  return (
    <>
      <MainContainer.Header>{todo?.title}</MainContainer.Header>
      <MainContainer.CardContent>
        <FormProvider {...detailsForm}>
          <Stack spacing={3}>
            <TextField name="title" label="Title" />
            <Button onClick={onSubmit}>Submit</Button>
          </Stack>
        </FormProvider>
      </MainContainer.CardContent>
    </>
  )
}

export default React.memo(BookDetails)
