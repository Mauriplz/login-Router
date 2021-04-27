import { useEffect, useState } from "react"
import { getCourses } from "../prueba/getCourses"

export const useFetchCourses = (url) =>{
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getCourses(url)
            .then(dat=>{
                setstate({
                    data:dat,
                    loading:false
                })
            })
    }, [url])

    return state
}