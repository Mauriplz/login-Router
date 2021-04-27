
export const getCourses = async(url)=>{
    
    const resp = await fetch(url)
    const data = await resp.json()

    const courses = {
        cor : data
    }

    console.log(data)

    return courses

}