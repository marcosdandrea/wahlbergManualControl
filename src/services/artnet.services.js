const { globals } = require("../../globals")
const artnetDMX = require("../drivers/artnet")

const enableMotor = ({screen}) => {
    artnetDMX.set({
        universe: globals.ARTNET_UNIV,
        channel: Number(screen) *10+ 3,
        value: 128
    })
}

const disableMotor = ({screen}) => {
    artnetDMX.set({
        universe: globals.ARTNET_UNIV,
        channel: Number(screen) *10+ 3,
        value: 0
    })
}

const handleOnSetBottomLimit = (props) => {
    const {value, screen} = props

    if (Number(value) == 0) 
        disableMotor({screen})
    else
        enableMotor({screen})

    artnetDMX.set({
        universe: globals.ARTNET_UNIV,
        channel: 5 + Number(screen) * 10,
        value: Number(value)
    })



}


const handleOnSetTopLimit = (props) => {
    const {value, screen} = props

    if (Number(value) == 0) 
        disableMotor({screen})
    else
        enableMotor({screen})
    
    artnetDMX.set({
        universe: globals.ARTNET_UNIV,
        channel: 6 + Number(screen) * 10,
        value: Number(value)
    })

}


module.exports = {
    handleOnSetBottomLimit,
    handleOnSetTopLimit
}