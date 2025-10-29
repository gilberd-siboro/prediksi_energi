import React from 'react'
import { CCol, CRow, CWidgetStatsB } from '@coreui/react'

const Dashboard = () => {
  return (
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsB
          className="mb-3"
          progress={{ color: 'success', value: 75 }}
          text="Prediksi Energi Berdasarkan Data Historis"
          title="Prediksi Energi"
          value="PT Telkom Infrastruktur Indonesia Jakarta"
        />
      </CCol>

    </CRow>
  )
}

export default Dashboard
