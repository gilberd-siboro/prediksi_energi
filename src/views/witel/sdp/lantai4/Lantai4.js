import React from 'react'
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

const Lantai4 = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CDropdown>
                    <CDropdownToggle color="primary" href="#">Periode Waktu</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">24 Jam</CDropdownItem>
                        <CDropdownItem href="#">7 Hari</CDropdownItem>
                        <CDropdownItem href="#">4 Minggu</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                <CRow>
                    <CCol xs={12}>
                        <CCard className="mt-4">
                            <CCardHeader>
                                <strong>Hasil Prediksi</strong>
                            </CCardHeader>
                            <CCardBody>
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
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">Linear Regression</CTableHeaderCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">Gradient Boosting</CTableHeaderCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CCol>
        </CRow>
    )
}

export default Lantai4