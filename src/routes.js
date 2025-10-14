import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// OPMC
const OpmcL1 = React.lazy(() => import('./views/opmc/lantai1/Lantai1'))
const OpmcL2 = React.lazy(() => import('./views/opmc/lantai2/Lantai2'))
const OpmcL3 = React.lazy(() => import('./views/opmc/lantai3/Lantai3'))
const OpmcL4 = React.lazy(() => import('./views/opmc/lantai4/Lantai4'))
const OpmcL5 = React.lazy(() => import('./views/opmc/lantai5/Lantai5'))
const OpmcL6 = React.lazy(() => import('./views/opmc/lantai6/Lantai6'))
const OpmcLift = React.lazy(() => import('./views/opmc/lift/Lift'))

// WITEL

const Chiller = React.lazy(() => import('./views/witel/chiller/Chiller'))
const WitelL1 = React.lazy(() => import('./views/witel/lantai1/Lantai1'))
const WitelL2 = React.lazy(() => import('./views/witel/lantai2/Lantai2'))
const WitelL3 = React.lazy(() => import('./views/witel/lantai3/Lantai3'))
const WitelL4 = React.lazy(() => import('./views/witel/lantai4/Lantai4'))
const WitelL5 = React.lazy(() => import('./views/witel/lantai5/Lantai5'))
const WitelL6 = React.lazy(() => import('./views/witel/lantai6/Lantai6'))
const WitelL7 = React.lazy(() => import('./views/witel/lantai7/Lantai7'))
const WitelL8 = React.lazy(() => import('./views/witel/lantai8/Lantai8'))
const WitelLift = React.lazy(() => import('./views/witel/lift/Lift'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/opmc', name: 'Opmc', exact: true },
  { path: '/opmc/lantai1', name: 'Lantai 1', element: OpmcL1 },
  { path: '/opmc/lantai2', name: 'Lantai 2', element: OpmcL2 },
  { path: '/opmc/lantai3', name: 'Lantai 3', element: OpmcL3 },
  { path: '/opmc/lantai4', name: 'Lantai 4', element: OpmcL4 },
  { path: '/opmc/lantai5', name: 'Lantai 5', element: OpmcL5 },
  { path: '/opmc/lantai6', name: 'Lantai 6', element: OpmcL6 },
  { path: '/opmc/lift', name: 'Lift', element: OpmcLift,  },
  { path: '/witel', name: 'Witel', exact: true },
  { path: '/witel/chiller', name: 'Chiller', element: Chiller },
  { path: '/witel/lantai1', name: 'Lantai 1', element: WitelL1 },
  { path: '/witel/lantai2', name: 'Lantai 2', element: WitelL2 },
  { path: '/witel/lantai3', name: 'Lantai 3', element: WitelL3 },
  { path: '/witel/lantai4', name: 'Lantai 4', element: WitelL4 },
  { path: '/witel/lantai5', name: 'Lantai 5', element: WitelL5 },
  { path: '/witel/lantai6', name: 'Lantai 6', element: WitelL6 },
  { path: '/witel/lantai7', name: 'Lantai 7', element: WitelL7 },
  { path: '/witel/lantai8', name: 'Lantai 8', element: WitelL8 },
  { path: '/witel/lift', name: 'Lift', element: WitelLift,  },

]

export default routes
