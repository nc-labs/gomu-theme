import { useCallback, useState } from 'react'

export const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const openPopover = useCallback((event) => setAnchorEl(event.currentTarget), [])
  const closePopover = useCallback(() => setAnchorEl(null), [])
  return { anchorEl, openPopover, closePopover }
}
