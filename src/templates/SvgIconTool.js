import React, { useCallback, useLayoutEffect, useState } from 'react'

import { Button, Stack, SvgIcon } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Typography } from 'components'
import { svgConfigs } from 'configs/svgConfigs'
import { encodeSvgFiles } from 'utils/svg'

const Input = styled('input')({
  display: 'none',
})

const ShowIcon = React.memo(({ name, viewBox, children }) => (
  <Stack width={160} mb={8} alignItems="center">
    <SvgIcon viewBox={viewBox} fontSize="large">
      {children?.map(({ tagName, attrs }, index) =>
        React.createElement(tagName, { ...attrs, key: index })
      )}
    </SvgIcon>

    <Typography textAlign="center">{name}</Typography>
  </Stack>
))

const SvgIconTool = () => {
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
    const blob = new Blob(
      ['// eslint-disable-file', `export const svgConfigs = ${JSON.stringify(icons)}`],
      {
        type: 'text/plain',
      }
    )

    setHref(window.URL.createObjectURL(blob))
  }, [JSON.stringify(icons)])

  return (
    <>
      <Stack direction="row" width="100%" flexWrap="wrap">
        {Object.keys(icons)
          .sort()
          .map((iconName, index) => (
            <ShowIcon name={iconName} {...icons[iconName]} key={index} />
          ))}
      </Stack>

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
    </>
  )
}

export default React.memo(SvgIconTool)
