import { memo } from 'react'
import { usePopover } from '@hooks/usePopover'
import { Logout as LogoutIcon } from '@mui/icons-material'
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from '@mui/material'

const ProfileSection = () => {
  const { open, anchorEl, openPopover, closePopover } = usePopover()

  return (
    <>
      <Avatar className="cursor-pointer" onClick={openPopover} />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{ paper: 'w-[calc(100vw-32px)] max-w-[360px]' }}
      >
        <List>
          <ListItem>
            <ListItemButton className="items-center " onClick={closePopover}>
              <ListItemIcon>
                <Avatar className="h-[64px] w-[64px] cursor-pointer" />
              </ListItemIcon>
              <ListItemText>
                <p className="font-bold uppercase">User name</p>
                <p>To profiles</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton onClick={closePopover}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  )
}
export default memo(ProfileSection)
