import { memo } from 'react'
import ROUTE_PATHS from '@configs/routePaths'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ProfileSection from './ProfileSection'

const Header = ({ toggleSidebar }) => (
  <div className="flex w-full">
    <div className="flex w-[260px] items-center justify-between">
      <Button
        className="items-center hidden space-x-2 md:flex"
        variant="text"
        size="large"
        LinkComponent={Link}
        to={ROUTE_PATHS.HOME.pathname}
      >
        <img src="/logo512.png" alt="logo" className="h-[32px] w-[32px]" />
        <p>GOMU THEME</p>
      </Button>

      <IconButton onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
    </div>

    <span className="flex items-center justify-end flex-1 px-2 space-x-2">
      <LanguageSwitcher />
      <ProfileSection />
    </span>
  </div>
)
export default memo(Header)
