const CONSTANTS = Object.freeze({
    ENV_DEV: '--dev',
    ENV_PROD: '--prod',
})

let globals = {
    ENVIRONMENT: CONSTANTS.ENV_PROD,
    SERVER_PORT: 6500,
    ARTNET_UNIV: 0
}

module.exports = {globals, CONSTANTS}