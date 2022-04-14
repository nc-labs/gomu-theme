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
import { Icon } from 'components'
import { usePopover } from 'hooks/usePopover'

const mockUser = {
  avt: '',
  name: 'SSM User',
}

const MainUserSection = () => {
  const { popoverProps, openPopover, closePopover } = usePopover()

  return (
    <>
      <Box
        sx={{
          cursor: 'pointer',
        }}
        onClick={openPopover}
      >
        <Icon name="default-user" sx={{ height: 40, width: 40 }} />
      </Box>

      <Popover {...popoverProps}>
        <List sx={{ minWidth: 360 }}>
          <ListItemButton onClick={closePopover}>
            <ListItemIcon>
              <Icon name="default-user" sx={{ height: 64, width: 64 }} />
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
