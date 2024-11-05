import { useState } from "react";
import "./styles.css"

const ScreenIndexSelector = ({onChangeSelection}) => {
    const [selection, setSelection] = useState(0)

    const handleOnChangeSelection = (e) => {
        const id = e.target.id
        setSelection(id)
        onChangeSelection(id)
    }

    return ( 
    <div className="screenIndexSelector">
        <input type="radio" value={selection == 0} id="0" name="screenIndex" onChange={handleOnChangeSelection}/>
        <input type="radio" value={selection == 1} id="1" name="screenIndex" onChange={handleOnChangeSelection}/>
        <input type="radio" value={selection == 2} id="2" name="screenIndex" onChange={handleOnChangeSelection}/>
        <input type="radio" value={selection == 3} id="3" name="screenIndex" onChange={handleOnChangeSelection}/>
    </div> 
    );
}
 
export default ScreenIndexSelector;