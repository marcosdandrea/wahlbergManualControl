import { useEffect, useRef, useState } from "react";
import "./styles.css"

const Knot = ({knotPosition}) => {
    const knotRef = useRef(null)
    const [position, setPosition] = useState(0)
    
    const calculatePosition = (knotPosition) => {
        if (!knotRef.current) return
        const parent = knotRef.current.parentNode
        const parentRect = parent.getBoundingClientRect()
        const knotRect = knotRef.current.getBoundingClientRect()
        const middle = parentRect.height /2
        const knotCenter = knotRect.height / 2
        setPosition (middle - knotCenter + knotPosition)
    }

    useEffect(()=>{
        calculatePosition(knotPosition)

        if (knotPosition === 0)
            knotRef.current.style.transition = "all 0.2s ease"
        else
            knotRef.current.style.transition = "none"
    },[knotPosition])

    return ( 
    <div 
        ref={knotRef}
        style={{marginTop:position}}
        className="knot"/> 
)   ;
}
 
export default Knot;