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

const Lantai3 = () => {
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
                                <strong>Model ....</strong>
                            </CCardHeader>
                            <CCardBody>

                                <CTable>
                                    <CTableHead color="light">
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                            <CTableDataCell>Mark</CTableDataCell>
                                            <CTableDataCell>Otto</CTableDataCell>
                                            <CTableDataCell>@mdo</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                            <CTableDataCell>Jacob</CTableDataCell>
                                            <CTableDataCell>Thornton</CTableDataCell>
                                            <CTableDataCell>@fat</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                            <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                                            <CTableDataCell>@twitter</CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CCardBody>
                        </CCard>
                        <CCard className="mt-4">
                            <CCardHeader>
                                <strong>Model ....</strong>
                            </CCardHeader>
                            <CCardBody>

                                <CTable>
                                    <CTableHead color="light">
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                            <CTableDataCell>Mark</CTableDataCell>
                                            <CTableDataCell>Otto</CTableDataCell>
                                            <CTableDataCell>@mdo</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                            <CTableDataCell>Jacob</CTableDataCell>
                                            <CTableDataCell>Thornton</CTableDataCell>
                                            <CTableDataCell>@fat</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                            <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                                            <CTableDataCell>@twitter</CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CCardBody>
                        </CCard>

                        <CCard className="mt-4">
                            <CCardHeader>
                                <strong>Model ....</strong>
                            </CCardHeader>
                            <CCardBody>

                                <CTable>
                                    <CTableHead color="light">
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                            <CTableDataCell>Mark</CTableDataCell>
                                            <CTableDataCell>Otto</CTableDataCell>
                                            <CTableDataCell>@mdo</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                            <CTableDataCell>Jacob</CTableDataCell>
                                            <CTableDataCell>Thornton</CTableDataCell>
                                            <CTableDataCell>@fat</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                            <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                                            <CTableDataCell>@twitter</CTableDataCell>
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

export default Lantai3