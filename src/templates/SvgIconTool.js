import React, { useCallback, useState } from 'react'

import { Button, Stack, SvgIcon } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Typography } from 'components'
import { svgConfigs } from 'configs/svgConfigs'
import { encodeSvgFiles } from 'utils/svg'

const Input = styled('input')({
  display: 'none',
})

const ShowIcon = React.memo(({ name, viewBox, paths }) => (
  <Stack width={160} mb={8} alignItems="center">
    <SvgIcon viewBox={viewBox} fontSize="large">
      {paths.map((path, index) => (
        <path key={index} {...path} />
      ))}
    </SvgIcon>

    <Typography textAlign="center">{name}</Typography>
  </Stack>
))

const SvgIconTool = () => {
  const [icons, setIcons] = useState(svgConfigs || {})

  const onFileChange = useCallback(
    async (e) => {
      const newIcons = {
        ...icons,
        ...(await encodeSvgFiles(e.target.files)),
      }

      setIcons(newIcons)
    },
    [JSON.stringify(icons)]
  )

  return (
    <>
      <Stack direction="row" width="100%" flexWrap="wrap">
        {Object.keys(icons).map((iconName, index) => (
          <ShowIcon name={iconName} {...icons[iconName]} key={index} />
        ))}
      </Stack>

      <Stack direction="row" spacing={3} justifyContent="center">
        <label htmlFor="svg-upload">
          <Input accept=".svg" id="svg-upload" multiple type="file" onChange={onFileChange} />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>

        <Button
          onClick={() => {
            const content = `export const svgIcons = ${JSON.stringify(icons) || '{}'}`
            navigator.clipboard.writeText(content)
          }}
        >
          Copy configs
        </Button>
      </Stack>
    </>
  )
}

export default React.memo(SvgIconTool)
