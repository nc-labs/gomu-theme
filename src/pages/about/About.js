import React from 'react'

import { Stack, Box, Button } from '@mui/material'
import * as DynamicForm from 'modules/DynamicForm'

const AboutForm = new DynamicForm.Form({
  string: new DynamicForm.StringAttribute('string')
    .setLabel('String')
    .setValitdation({ required: true, minLen: 5, maxLen: 10 }),
  number: new DynamicForm.NumberAttribute('number')
    .setLabel('Number')
    .setValitdation({ required: true, min: 5, max: 10 }),
})

const About = () => (
  <Stack className="p-3" spacing={8}>
    <Box className="grid grid-cols-6 gap-4">
      <AboutForm.Render />
    </Box>
    <Button onClick={AboutForm.onSubmit}>Submit</Button>
  </Stack>
)

export default React.memo(About)
