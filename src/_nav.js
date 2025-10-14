import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilPuzzle,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Konsumsi Energi',
  },
  {
    component: CNavGroup,
    name: 'OPMC',
    to: '/opmc',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lantai 1',
        to: '/opmc/lantai1',
      },
      {
        component: CNavItem,
        name: 'Lantai 2',
        to: '/opmc/lantai2',
      },
      {
        component: CNavItem,
        name: 'Lantai 3',
        to: '/opmc/lantai3',
      },
      {
        component: CNavItem,
        name: 'Lantai 4',
        to: '/opmc/lantai4',
      },
      {
        component: CNavItem,
        name: 'Lantai 5',
        to: '/opmc/lantai5',
      },
      {
        component: CNavItem,
        name: 'Lantai 6',
        to: '/opmc/lantai6',
      },
      {
        component: CNavItem,
        name: 'LIFT',
        to: '/opmc/lift',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'WITEL',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CHILLER',
        to: '/witel/chiller',
      },
      {
        component: CNavItem,
        name: 'Lantai 1',
        to: '/witel/lantai1',
      },
      {
        component: CNavItem,
        name: 'Lantai 2',
        to: '/witel/lantai2',
      },
      {
        component: CNavItem,
        name: 'Lantai 3',
        to: '/witel/lantai3',
      },
      {
        component: CNavItem,
        name: 'Lantai 4',
        to: '/witel/lantai4',
      },
      {
        component: CNavItem,
        name: 'Lantai 5',
        to: '/witel/lantai5',
      },
      {
        component: CNavItem,
        name: 'Lantai 6',
        to: '/witel/lantai6',
      },
      {
        component: CNavItem,
        name: 'Lantai 7',
        to: '/witel/lantai7',
      },
      {
        component: CNavItem,
        name: 'Lantai 8',
        to: '/witel/lantai8',
      },
      {
        component: CNavItem,
        name: 'LIFT',
        to: '/witel/lift',
      },
    ],
  },
]

export default _nav
