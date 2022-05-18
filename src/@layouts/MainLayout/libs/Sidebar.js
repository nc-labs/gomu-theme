import React, { memo } from 'react'
import { useBoolean } from '@hooks/useBoolean'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

const NavGroup = ({ nav, level }) =>
  level === 1 ? (
    <>
      <ListItem>
        <ListItemText>
          <p className="font-bold text-subtitle">{nav.name}</p>
        </ListItemText>
      </ListItem>
      <Sidebar navigators={nav.children} level={level} />
    </>
  ) : (
    <></>
  )

const NavMenu = ({ nav, level }) => {
  const { pathname } = useLocation()
  const isActive = Boolean(nav.children.find((item) => item.pathname === pathname))
  const [open, { toggle }] = useBoolean(isActive)

  return (
    <>
      <ListItem>
        <ListItemButton onClick={toggle} selected={isActive && !open}>
          <ListItemIcon>{nav.icon}</ListItemIcon>
          <ListItemText>{nav.name}</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open}>
        <Sidebar navigators={nav.children} level={level + 1} />
      </Collapse>
    </>
  )
}

const NavItem = ({ nav }) => {
  const { pathname } = useLocation()
  const isActive = pathname === nav.pathname

  return (
    <ListItem>
      <Link to={nav.pathname} className="contents">
        <ListItemButton selected={isActive}>
          <ListItemIcon className={clsx()}>{nav.icon}</ListItemIcon>
          <ListItemText>{nav.name}</ListItemText>
        </ListItemButton>
      </Link>
    </ListItem>
  )
}

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
