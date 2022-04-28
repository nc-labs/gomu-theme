const svgFileToObject = async (file) => {
  try {
    const [iconName] = file.name.split('.svg')
    const content = await file.text()
    const svg = new DOMParser()
      .parseFromString(content.slice(content.indexOf('<svg')), 'text/html')
      .querySelector('svg')

    if (!svg) return

    const viewBox = svg.getAttribute('viewBox')

    const children = Array.from(svg.querySelectorAll('path, circle, polygon, rect')).map(
      (config) => {
        switch (config.tagName) {
          case 'path':
            return {
              tagName: 'path',
              attrs: {
                d: config.getAttribute('d'),
                fill: config.getAttribute('fill') || config.style.fill || undefined,
              },
            }
          case 'circle':
            return {
              tagName: 'circle',
              attrs: {
                cx: config.getAttribute('cx'),
                cy: config.getAttribute('cy'),
                r: config.getAttribute('r'),
                fill: config.getAttribute('fill') || config.style.fill || undefined,
              },
            }
          case 'polygon':
            return {
              tagName: 'polygon',
              attrs: {
                points: config.getAttribute('points'),
                fill: config.getAttribute('fill') || config.style.fill || undefined,
              },
            }

          case 'rect':
            return {
              tagName: 'rect',
              attrs: {
                x: config.getAttribute('x'),
                y: config.getAttribute('y'),
                width: config.getAttribute('width'),
                height: config.getAttribute('height'),
                fill: config.getAttribute('fill') || config.style.fill || undefined,
              },
            }

          default:
            return {}
        }
      }
    )

    return {
      name: iconName,
      icon: {
        viewBox,
        children,
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
