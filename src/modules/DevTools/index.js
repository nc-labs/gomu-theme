import React, { useCallback, useLayoutEffect, useState } from 'react'

import { Button, DialogActions, Stack, SvgIcon, Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/material/styles'
import { svgConfigs } from 'configs/svgConfigs'
import { useDialog } from 'hooks/useDialog'
import { Typography, FlatList, IconButton } from 'modules/components'
import { encodeSvgFiles } from 'utils/svg'

const Input = styled('input')({
  display: 'none',
})

const ShowIcon = React.memo(({ name, viewBox, children }) => (
  <Stack width={160} mb={8} alignItems="center">
    <SvgIcon viewBox={viewBox} fontSize="large">
      <FlatList
        data={children}
        renderItems={({ tagName, attrs }) => React.createElement(tagName, attrs)}
      />
    </SvgIcon>

    <Typography textAlign="center">{name}</Typography>
  </Stack>
))

const DevTools = () => {
  const { dialogProps, openDialog, closeDialog } = useDialog()
  const [icons, setIcons] = useState(svgConfigs || {})
  const [href, setHref] = useState('')

  const onFileChange = useCallback(
    async (e) => {
      const newIcons = {
        ...icons,
        ...(await encodeSvgFiles(e.target.files)),
      }

      setIcons(newIcons)

      const blob = new Blob([`export const svgConfigs = ${JSON.stringify(newIcons)}`], {
        type: 'text/plain',
      })

      setHref(window.URL.createObjectURL(blob))
    },
    [JSON.stringify(icons)]
  )

  useLayoutEffect(() => {
    const blob = new Blob([`export const svgConfigs = ${JSON.stringify(icons)}`], {
      type: 'text/plain',
    })

    setHref(window.URL.createObjectURL(blob))
  }, [JSON.stringify(icons)])

  return (
    <Box className="hidden md:block">
      <Box className="fixed top-[240px] right-0 z-[9999999]">
        <IconButton name="dev-tools" size="large" onClick={openDialog} />
      </Box>

      <Dialog {...dialogProps} maxWidth="lg">
        <DialogTitle>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="heading">Dev tools - Svg icons</Typography>
            <IconButton name="close" onClick={closeDialog} />
          </Stack>
        </DialogTitle>

        <DialogContent className="max-h-[50vh]">
          <Stack direction="row" width="100%" justifyContent="space-between" flexWrap="wrap">
            <FlatList
              data={Object.keys(icons).sort()}
              renderItems={(iconName) => <ShowIcon name={iconName} {...icons[iconName]} />}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Stack direction="row" spacing={3} justifyContent="center">
            <label htmlFor="svg-upload">
              <Input accept=".svg" id="svg-upload" multiple type="file" onChange={onFileChange} />
              <Button variant="contained" component="span">
                Upload svg icons
              </Button>
            </label>

            <a href={href} download="svgConfigs.js">
              <Button>Download configs file</Button>
            </a>
          </Stack>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default React.memo(DevTools)
