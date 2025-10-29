import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// OPMC

// Opmc AHU
const OpmcAhuL2 = React.lazy(() => import('./views/opmc/ahu/lantai2/Lantai2'))
const OpmcAhuL3 = React.lazy(() => import('./views/opmc/ahu/lantai3/Lantai3'))
const OpmcAhuL4 = React.lazy(() => import('./views/opmc/ahu/lantai4/Lantai4'))
const OpmcAhuL5 = React.lazy(() => import('./views/opmc/ahu/lantai5/Lantai5'))
const OpmcAhuL6 = React.lazy(() => import('./views/opmc/ahu/lantai6/Lantai6'))

// Opmc SDP
const OpmcSdpL1 = React.lazy(() => import('./views/opmc/sdp/lantai1/Lantai1'))
const OpmcSdpL2 = React.lazy(() => import('./views/opmc/sdp/lantai2/Lantai2'))
const OpmcSdpL3 = React.lazy(() => import('./views/opmc/sdp/lantai3/Lantai3'))
const OpmcSdpL4 = React.lazy(() => import('./views/opmc/sdp/lantai4/Lantai4'))
const OpmcSdpL5 = React.lazy(() => import('./views/opmc/sdp/lantai5/Lantai5'))
const OpmcSdpL6 = React.lazy(() => import('./views/opmc/sdp/lantai6/Lantai6'))
const OpmcLift = React.lazy(() => import('./views/opmc/lift/Lift'))

// WITEL

const Chiller = React.lazy(() => import('./views/witel/chiller/Chiller'))
const WitelLift = React.lazy(() => import('./views/witel/lift/Lift'))

// Witel AHU

const WitelAhuL1 = React.lazy(() => import('./views/witel/ahu/lantai1/Lantai1'))
const WitelAhuL2 = React.lazy(() => import('./views/witel/ahu/lantai2/Lantai2'))
const WitelAhuL3 = React.lazy(() => import('./views/witel/ahu/lantai3/Lantai3'))
const WitelAhuL4 = React.lazy(() => import('./views/witel/ahu/lantai4/Lantai4'))
const WitelAhuL5 = React.lazy(() => import('./views/witel/ahu/lantai5/Lantai5'))
const WitelAhuL6 = React.lazy(() => import('./views/witel/ahu/lantai6/Lantai6'))
const WitelAhuL7 = React.lazy(() => import('./views/witel/ahu/lantai7/Lantai7'))
const WitelAhuL8 = React.lazy(() => import('./views/witel/ahu/lantai8/Lantai8'))

// Witel SDP

const WitelSdpL1 = React.lazy(() => import('./views/witel/sdp/lantai1/Lantai1'))
const WitelSdpL2 = React.lazy(() => import('./views/witel/sdp/lantai2/Lantai2'))
const WitelSdpL3 = React.lazy(() => import('./views/witel/sdp/lantai3/Lantai3'))
const WitelSdpL4 = React.lazy(() => import('./views/witel/sdp/lantai4/Lantai4'))
const WitelSdpL5 = React.lazy(() => import('./views/witel/sdp/lantai5/Lantai5'))
const WitelSdpL6 = React.lazy(() => import('./views/witel/sdp/lantai6/Lantai6'))
const WitelSdpL7 = React.lazy(() => import('./views/witel/sdp/lantai7/Lantai7'))
const WitelSdpL8 = React.lazy(() => import('./views/witel/sdp/lantai8/Lantai8'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/opmc', name: 'Opmc', exact: true },
  { path: '/opmc/ahu/lantai2', name: 'AHU Lantai 2', element: OpmcAhuL2 },
  { path: '/opmc/ahu/lantai3', name: 'AHU Lantai 3', element: OpmcAhuL3 },
  { path: '/opmc/ahu/lantai4', name: 'AHU Lantai 4', element: OpmcAhuL4 },
  { path: '/opmc/ahu/lantai5', name: 'AHU Lantai 5', element: OpmcAhuL5 },
  { path: '/opmc/ahu/lantai6', name: 'AHU Lantai 6', element: OpmcAhuL6 },
  { path: '/opmc/sdp/lantai1', name: 'SDP Lantai 1', element: OpmcSdpL1 },
  { path: '/opmc/sdp/lantai2', name: 'SDP Lantai 2', element: OpmcSdpL2 },
  { path: '/opmc/sdp/lantai3', name: 'SDP Lantai 3', element: OpmcSdpL3 },
  { path: '/opmc/sdp/lantai4', name: 'SDP Lantai 4', element: OpmcSdpL4 },
  { path: '/opmc/sdp/lantai5', name: 'SDP Lantai 5', element: OpmcSdpL5 },
  { path: '/opmc/sdp/lantai6', name: 'SDP Lantai 6', element: OpmcSdpL6 },
  { path: '/opmc/lift', name: 'Lift', element: OpmcLift,  },
  { path: '/witel', name: 'Witel', exact: true },
  { path: '/witel/chiller', name: 'Chiller', element: Chiller },
  { path: '/witel/ahu/lantai1', name: 'AHU Lantai 1', element: WitelAhuL1 },
  { path: '/witel/ahu/lantai2', name: 'AHU Lantai 2', element: WitelAhuL2 },
  { path: '/witel/ahu/lantai3', name: 'AHU Lantai 3', element: WitelAhuL3 },
  { path: '/witel/ahu/lantai4', name: 'AHU Lantai 4', element: WitelAhuL4 },
  { path: '/witel/ahu/lantai5', name: 'AHU Lantai 5', element: WitelAhuL5 },
  { path: '/witel/ahu/lantai6', name: 'AHU Lantai 6', element: WitelAhuL6 },
  { path: '/witel/ahu/lantai7', name: 'AHU Lantai 7', element: WitelAhuL7 },
  { path: '/witel/ahu/lantai8', name: 'AHU Lantai 8', element: WitelAhuL8 },
  { path: '/witel/sdp/lantai1', name: 'SDP Lantai 1', element: WitelSdpL1 },
  { path: '/witel/sdp/lantai2', name: 'SDP Lantai 2', element: WitelSdpL2 },
  { path: '/witel/sdp/lantai3', name: 'SDP Lantai 3', element: WitelSdpL3 },
  { path: '/witel/sdp/lantai4', name: 'SDP Lantai 4', element: WitelSdpL4 },
  { path: '/witel/sdp/lantai5', name: 'SDP Lantai 5', element: WitelSdpL5 },
  { path: '/witel/sdp/lantai6', name: 'SDP Lantai 6', element: WitelSdpL6 },
  { path: '/witel/sdp/lantai7', name: 'SDP Lantai 7', element: WitelSdpL7 },
  { path: '/witel/sdp/lantai8', name: 'SDP Lantai 8', element: WitelSdpL8 },
  { path: '/witel/lift', name: 'Lift', element: WitelLift,  },

]

export default routes
