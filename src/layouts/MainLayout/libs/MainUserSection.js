import React from 'react'

import {
  Box,
  Divider,
  Stack,
  Typography,
  Popover,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material'
import { usePopover } from 'hooks/usePopover'
import { Icon } from 'modules/components'

const mockUser = {
  avt: '',
  name: 'SSM User',
}

const MainUserSection = () => {
  const { popoverProps, openPopover, closePopover } = usePopover()

  return (
    <>
      <Box className="cursor-pointer" onClick={openPopover}>
        <Icon name="default-user" className="h-[40px] w-[40px]" />
      </Box>

      <Popover {...popoverProps}>
        <List className="min-w-[360px]">
          <ListItemButton onClick={closePopover}>
            <ListItemIcon>
              <Icon name="default-user" className="h-[64px] w-[64px]" />
            </ListItemIcon>

            <ListItemText>
              <Stack>
                <Typography variant="subtitle1">{mockUser.name}</Typography>
                <Typography>Go to profile</Typography>
              </Stack>
            </ListItemText>
          </ListItemButton>

          <Divider />

          <ListItemButton onClick={closePopover}>
            <ListItemIcon>
              <Icon name="logout" />
            </ListItemIcon>

            <ListItemText>
              <Typography variant="subtitle2">Logout</Typography>
            </ListItemText>
          </ListItemButton>
        </List>
      </Popover>
    </>
  )
}

export default React.memo(MainUserSection)
