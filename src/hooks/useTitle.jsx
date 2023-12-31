import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title} || Language Oasis`;
    },[title])
}
export default useTitle;