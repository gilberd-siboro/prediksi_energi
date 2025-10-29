import React from 'react'
import usePredictions from '../../../../hooks/usePredictions'

import {
    CCol,
    CRow,
    CDropdown,
    CCardBody,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CCard,
    CCardHeader
} from '@coreui/react'

const Lantai5 = () => {
    const { timeRange, predictions, handleTimeRangeChange } = usePredictions('OPMC', 'AHU', 5)

    return (
        <CRow>
            <CCol xs={12}>
                <CDropdown>
                    <CDropdownToggle color="primary" href="#">Periode Waktu</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem onClick={() => handleTimeRangeChange('24h')}>24 Jam</CDropdownItem>
                        <CDropdownItem onClick={() => handleTimeRangeChange('7d')}>7 Hari</CDropdownItem>
                        <CDropdownItem onClick={() => handleTimeRangeChange('4w')}>4 Minggu</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                <CRow>
                    <CCol xs={12}>
                        <CCard className="mt-4">
                            <CCardHeader>
                                <strong>Hasil Prediksi</strong>
                            </CCardHeader>
                            <CCardBody>
                                {timeRange === '' ? (
                                    <p>Silakan pilih periode waktu untuk melihat hasil prediksi.</p>  // Pesan jika belum memilih periode
                                ) : (
                                    <CTable>
                                        <CTableHead color="light">
                                            <CTableRow>
                                                <CTableHeaderCell scope="col">Model</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">MAE</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">R2</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">Total Prediksi kWh</CTableHeaderCell>
                                            </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                            <CTableRow>
                                                <CTableHeaderCell scope="row">Random Forest</CTableHeaderCell>
                                                <CTableDataCell>{predictions["Random Forest"].mae}</CTableDataCell>
                                                <CTableDataCell>{predictions["Random Forest"].R2}</CTableDataCell>
                                                <CTableDataCell>{predictions["Random Forest"].result}</CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                                <CTableHeaderCell scope="row">Linear Regression</CTableHeaderCell>
                                                <CTableDataCell>{predictions["Linear Regression"].mae}</CTableDataCell>
                                                <CTableDataCell>{predictions["Linear Regression"].R2}</CTableDataCell>
                                                <CTableDataCell>{predictions["Linear Regression"].result}</CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                                <CTableHeaderCell scope="row">Gradient Boosting</CTableHeaderCell>
                                                <CTableDataCell>{predictions["Gradient Boosting"].mae}</CTableDataCell>
                                                <CTableDataCell>{predictions["Gradient Boosting"].R2}</CTableDataCell>
                                                <CTableDataCell>{predictions["Gradient Boosting"].result}</CTableDataCell>
                                            </CTableRow>
                                        </CTableBody>
                                    </CTable>
                                )}
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CCol>
        </CRow>
    )
}

export default Lantai5