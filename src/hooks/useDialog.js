import React, { useCallback, useState } from 'react'

import { Fade } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade direction="up" ref={ref} {...props} />
})

export const useDialog = () => {
  const [open, setOpen] = useState(false)
  const openDialog = useCallback(() => setOpen(true))
  const closeDialog = useCallback(() => setOpen(false))

  return {
    dialogProps: {
      open,
      TransitionComponent: Transition,
      onClose: closeDialog,
    },
    isOpen: open,
    openDialog,
    closeDialog,
  }
}
