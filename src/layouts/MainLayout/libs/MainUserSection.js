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
import Svg from 'svg'

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
        <Svg.DefaultAvatar sx={{ height: 40, width: 40 }} />
      </Box>

      <Popover {...popoverProps}>
        <List sx={{ minWidth: 360 }}>
          <ListItemButton onClick={closePopover}>
            <ListItemIcon>
              <Svg.DefaultAvatar sx={{ height: 64, width: 64 }} />
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
              <Svg.Logout />
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
