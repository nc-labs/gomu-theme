import { Adjust } from '@mui/icons-material'

const navigators = [
  {
    type: 'group',
    name: 'Group 1',
    childrens: [
      {
        type: 'menu',
        name: 'Menu 1',
        icon: <Adjust />,
        childrens: [
          {
            type: 'item',
            name: 'Item 1-1',
            icon: <Adjust />,
            path: '/',
          },
          {
            type: 'item',
            name: 'Item 1-2',
            icon: <Adjust />,
            path: '/about',
          },
        ],
      },
      {
        type: 'item',
        name: 'Item 1',
        icon: <Adjust />,
      },
    ],
  },
]

export default navigators
