const artnet = require("artnet");

const art = artnet()

const set = ({universe, channel, value}) => {
    console.log ({universe, channel, value})
    art.set(universe, channel, value, function (err, res) {
        
    });
}

const arnetDMX = {
    set
}

module.exports = arnetDMX