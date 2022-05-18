import { memo, useEffect } from 'react'
import navigators from '@configs/navigators'
import { useBoolean } from '@hooks/useBoolean'
import { useMediaQuery, Drawer } from '@mui/material'
import clsx from 'clsx'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './libs/Footer'
import Header from './libs/Header'
import Sidebar from './libs/Sidebar'

const MainLayout = () => {
  const { pathname } = useLocation()
  const upMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [sidebarOpen, toggleSidebar] = useBoolean(upMd)

  useEffect(() => {
    toggleSidebar(upMd)
  }, [upMd])

  useEffect(() => {
    if (upMd) return

    toggleSidebar(false)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex h-[56px] md:h-[64px] items-center bg-white border-b">
        <Header toggleSidebar={toggleSidebar} />
      </header>

      <div className="flex h-[calc(100vh-56px-32px)] md:h-[calc(100vh-64px-32px)]">
        {upMd ? (
          /* sidebar on desktop */
          <div
            className={clsx(
              'hidden transition border-r overflow-y-auto overflow-x-hidden md:top-[64px] md:block',
              sidebarOpen ? 'w-[260px]' : 'w-0'
            )}
          >
            <div className="w-[260px] p-2">
              <Sidebar navigators={navigators} />
            </div>
          </div>
        ) : (
          /* sidebar on mobile */
          <Drawer
            variant="temporary"
            anchor="left"
            open={sidebarOpen}
            onClose={toggleSidebar}
            className="md:hidden"
            classes={{
              paper: 'w-[260px] p-2',
            }}
          >
            <Sidebar navigators={navigators} />
          </Drawer>
        )}

        <div className="flex-1 p-2 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      <footer className="flex h-[32px] px-2 items-center justify-end border-t">
        <Footer />
      </footer>
    </div>
  )
}
export default memo(MainLayout)
