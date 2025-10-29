import { useState, useEffect } from 'react'
import axios from 'axios'

const usePredictions = (building, subsystem, floor = null) => {  // floor sekarang opsional dengan default null
    const [timeRange, setTimeRange] = useState('')  // Inisialisasi dengan nilai kosong
    const [predictions, setPredictions] = useState({
        "Random Forest": { result: "", mae: "", R2: "" },
        "Linear Regression": { result: "", mae: "", R2: "" },
        "Gradient Boosting": { result: "", mae: "", R2: "" }
    })

    const handleTimeRangeChange = (range) => {
        setTimeRange(range)
    }

    const fetchPredictions = async () => {
        if (timeRange === '') {
            return;  // Jika belum ada waktu yang dipilih, jangan fetch data
        }

        // Bangun URL berdasarkan apakah floor ada atau tidak
        let url;
        if (floor !== null && floor !== undefined && floor !== '') {
            // Jika floor ada, gunakan endpoint dengan floor
            url = `http://127.0.0.1:8000/predict/${building}/${subsystem}/${floor}/${timeRange}`
        } else {
            // Jika floor tidak ada, gunakan endpoint tanpa floor
            url = `http://127.0.0.1:8000/predict/${building}/${subsystem}/${timeRange}`
        }

        try {
            const response = await axios.post(url)
            setPredictions(response.data.predictions)
        } catch (error) {
            console.error('There was an error fetching the predictions!', error)
            // Opsional: Reset predictions jika error
            setPredictions({
                "Random Forest": { result: "", mae: "", R2: "" },
                "Linear Regression": { result: "", mae: "", R2: "" },
                "Gradient Boosting": { result: "", mae: "", R2: "" }
            })
        }
    }

    useEffect(() => {
        fetchPredictions()  // Hanya fetch ketika timeRange, building, subsystem, atau floor berubah
    }, [timeRange, building, subsystem, floor])  // Tambahkan floor sebagai dependensi

    return {
        timeRange,
        predictions,
        handleTimeRangeChange
    }
}

export default usePredictions
