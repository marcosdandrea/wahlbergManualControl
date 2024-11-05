import { useContext } from "react";
import { socketContext } from "../components/Socket";

const useMoveScreen = ({resolution, screenIndex}) => {

    const {emit} = useContext(socketContext)

    const handleSetBottomLimit = (value) => {
        const normalizedValue = value * 255 * resolution
        emit({
            channel: "setBottomLimit",
            value: {value: normalizedValue, screen: screenIndex},
        })
    }

    const handleSetTopLimit = (value) => {
        const normalizedValue = value * -1 * 255 * resolution
        emit({
            channel: "setTopLimit",
            value: {value: normalizedValue, screen: screenIndex},
        })
    }
    
    const moveScreen = (value) => {
        if (value > 1 || value < -1) return
        if (value >= 0) handleSetBottomLimit(value)
        if (value < 0) handleSetTopLimit(value)
    }

    return ({
        moveScreen
    })

}
 
export default useMoveScreen;