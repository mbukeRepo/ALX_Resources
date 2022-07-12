import { useEffect, useState } from "react"

const useInit = (callback) => {
    const [mounted, setMounted] = useState(false)
  
    const resetInit = () => setMounted(false)
    useEffect(() => {
        if (!mounted){
            setMounted(true);
            callback();
        }
           
    }, [mounted, callback]);
    return [resetInit];
}

export default useInit;