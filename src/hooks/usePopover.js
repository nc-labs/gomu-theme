import { useCallback, useState } from 'react'

export const usePopover = () => {
  const [menu, setMenu] = useState(null)
  const openPopover = useCallback((event) => setMenu(event.currentTarget), [])
  const closePopover = useCallback(() => setMenu(null), [])

  return {
    popoverProps: {
      open: Boolean(menu),
      anchorEl: menu,
      onClose: closePopover,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    },
    isOpen: Boolean(menu),
    openPopover,
    closePopover,
  }
}
