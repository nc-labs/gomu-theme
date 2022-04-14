const svgFileToObject = async (file) => {
  try {
    const [iconName] = file.name.split('.svg')
    const content = await file.text()
    const svg = new DOMParser()
      .parseFromString(content.slice(content.indexOf('<svg')), 'text/html')
      .querySelector('svg')

    if (!svg) return

    const viewBox = svg.getAttribute('viewBox')
    const paths = Array.from(svg.querySelectorAll('path')).map((path) => ({
      d: path.getAttribute('d'),
      fill: path.getAttribute('fill'),
    }))

    return {
      name: iconName,
      icon: {
        paths,
        viewBox,
      },
    }
  } catch {}
}

export const encodeSvgFiles = async (files) => {
  const configs = {}
  const encodedSvg = await Promise.all(Array.from(files).map((file) => svgFileToObject(file)))
  encodedSvg.forEach(({ name, icon }) => name && (configs[name] = icon))
  return configs
}
