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
        name: 'AHU Lantai 2',
        to: '/opmc/ahu/lantai2',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 3',
        to: '/opmc/ahu/lantai3',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 4',
        to: '/opmc/ahu/lantai4',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 5',
        to: '/opmc/ahu/lantai5',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 6',
        to: '/opmc/ahu/lantai6',
      },
      {
        component: CNavItem,
        name: 'LIFT',
        to: '/opmc/lift',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 1',
        to: '/opmc/sdp/lantai1',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 2',
        to: '/opmc/sdp/lantai2',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 3',
        to: '/opmc/sdp/lantai3',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 4',
        to: '/opmc/sdp/lantai4',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 5',
        to: '/opmc/sdp/lantai5',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 6',
        to: '/opmc/sdp/lantai6',
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
        name: 'AHU Lantai 1',
        to: '/witel/ahu/lantai1',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 2',
        to: '/witel/ahu/lantai2',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 3',
        to: '/witel/ahu/lantai3',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 4',
        to: '/witel/ahu/lantai4',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 5',
        to: '/witel/ahu/lantai5',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 6',
        to: '/witel/ahu/lantai6',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 7',
        to: '/witel/ahu/lantai7',
      },
      {
        component: CNavItem,
        name: 'AHU Lantai 8',
        to: '/witel/ahu/lantai8',
      },
      {
        component: CNavItem,
        name: 'LIFT',
        to: '/witel/lift',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 1',
        to: '/witel/sdp/lantai1',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 2',
        to: '/witel/sdp/lantai2',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 3',
        to: '/witel/sdp/lantai3',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 4',
        to: '/witel/sdp/lantai4',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 5',
        to: '/witel/sdp/lantai5',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 6',
        to: '/witel/sdp/lantai6',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 7',
        to: '/witel/sdp/lantai7',
      },
      {
        component: CNavItem,
        name: 'SDP Lantai 8',
        to: '/witel/sdp/lantai8',
      },
    ],
  },
]

export default _nav
