import React, { useEffect, useRef, useState } from 'react'
import usePredictions from '../../../../hooks/usePredictions'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
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

const Lantai7 = () => {
    const { timeRange, predictions, handleTimeRangeChange } = usePredictions('WITEL', 'AHU', 7)
    const chartRef = useRef(null)

    // State untuk data chart yang diupdate
    const [chartData, setChartData] = useState({
        labels: ['Random Forest', 'Linear Regression', 'Gradient Boosting'],
        datasets: [
            {
                backgroundColor: ['#f87979', '#4caf50', '#2196f3'], // Ubah warna setiap batang
                borderColor: ['#f87979', '#4caf50', '#2196f3'],     // Ubah warna border setiap batang
                data: [
                    predictions["Random Forest"] ? predictions["Random Forest"].result : 0,
                    predictions["Linear Regression"] ? predictions["Linear Regression"].result : 0,
                    predictions["Gradient Boosting"] ? predictions["Gradient Boosting"].result : 0,
                ],
            },
        ],
    })

    // Update chart data setiap kali predictions berubah
    useEffect(() => {
        console.log("Predictions data:", predictions); // Log predictions untuk debugging

        if (predictions && predictions["Random Forest"] && predictions["Linear Regression"] && predictions["Gradient Boosting"]) {
            setChartData({
                labels: ['Random Forest', 'Linear Regression', 'Gradient Boosting'],
                datasets: [
                    {
                        label: 'Prediksi kWh',
                        backgroundColor: ['#f87979', '#4caf50', '#2196f3'], // Ubah warna setiap batang
                        borderColor: ['#f87979', '#4caf50', '#2196f3'],     // Ubah warna border setiap batang
                        data: [
                            parseFloat(predictions["Random Forest"].result),
                            parseFloat(predictions["Linear Regression"].result),
                            parseFloat(predictions["Gradient Boosting"].result),
                        ],
                    },
                ],
            })
        }
    }, [predictions]) // Update chart data ketika predictions berubah

    // Update chart instance setiap kali chartData berubah
    useEffect(() => {
        console.log("Chart Data Terbaru:", chartData); // Log untuk memastikan data berubah
        if (chartRef.current) {
            chartRef.current.update(); // Panggil update() untuk menerapkan perubahan data ke chart
        }
    }, [chartData]) // Update chart ketika chartData berubah

    useEffect(() => {
        const handleColorSchemeChange = () => {
            const chartInstance = chartRef.current
            if (chartInstance) {
                const { options } = chartInstance

                if (options.plugins?.legend?.labels) {
                    options.plugins.legend.labels.color = getStyle('--cui-body-color')
                }

                if (options.scales?.x) {
                    if (options.scales.x.grid) {
                        options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
                    }
                    if (options.scales.x.ticks) {
                        options.scales.x.ticks.color = getStyle('--cui-body-color')
                    }
                }

                if (options.scales?.y) {
                    if (options.scales.y.grid) {
                        options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
                    }
                    if (options.scales.y.ticks) {
                        options.scales.y.ticks.color = getStyle('--cui-body-color')
                    }
                }

                chartInstance.update()
            }
        }

        document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

        return () => {
            document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
        }
    }, [])

    const options = {
        plugins: {
            legend: {
                display: false, // Menonaktifkan tampilan legend
            },
            title: {
                display: true, // Menampilkan judul chart
                text: 'Prediksi kWh per Model', // Judul chart
                font: {
                    size: 16, // Ukuran font judul chart
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", // Font yang digunakan
                    weight: 'bold', // Mengatur ketebalan font
                },
                color: getStyle('--cui-body-color'), // Warna font judul chart
            },
        },
        scales: {
            x: {
                grid: {
                    color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                    color: getStyle('--cui-body-color'),
                },
                type: 'category',
            },
            y: {
                grid: {
                    color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                    color: getStyle('--cui-body-color'),
                },
                beginAtZero: true,
            },
        },
    }

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
                    <CCol xs={6}>
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
                    <CCol xs={6}>
                        <CChart type="bar" data={chartData} options={options} ref={chartRef} />
                    </CCol>

                </CRow>

            </CCol>
        </CRow>
    )
}

export default Lantai7