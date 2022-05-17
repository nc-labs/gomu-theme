import React, { memo } from 'react'
import { useBoolean } from '@hooks/useBoolean'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import clsx from 'clsx'

const NavGroup = ({ nav, level }) =>
  level === 1 ? (
    <>
      <ListItem>
        <ListItemText>
          <p className="font-bold text-subtitle">{nav.name}</p>
        </ListItemText>
      </ListItem>
      <Sidebar navigators={nav.childrens} level={level} />
    </>
  ) : (
    <></>
  )

const NavMenu = ({ nav, level }) => {
  const [open, toggle] = useBoolean(false)

  return (
    <>
      <ListItem>
        <ListItemButton onClick={toggle}>
          <ListItemIcon>{nav.icon}</ListItemIcon>
          <ListItemText>{nav.name}</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open}>
        <Sidebar navigators={nav.childrens} level={level + 1} />
      </Collapse>
    </>
  )
}

const NavItem = ({ nav }) => (
  <ListItem>
    <ListItemButton>
      <ListItemIcon className={clsx()}>{nav.icon}</ListItemIcon>
      <ListItemText>{nav.name}</ListItemText>
    </ListItemButton>
  </ListItem>
)

const Sidebar = ({ navigators, level = 1 }) => (
  <List className={clsx(level > 1 && level < 4 && 'pl-2 ml-7 border-l')}>
    {navigators.map((nav, index) => (
      <React.Fragment key={index}>
        {(() => {
          switch (nav.type) {
            case 'group':
              return <NavGroup nav={nav} level={level} />
            case 'menu':
              return <NavMenu nav={nav} level={level} />
            default:
              return <NavItem nav={nav} level={level} />
          }
        })()}
      </React.Fragment>
    ))}
  </List>
)

export default memo(Sidebar)
