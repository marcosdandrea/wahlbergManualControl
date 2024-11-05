const { CONSTANTS, globals } = require("./globals")

const env = process.argv

globals.ENVIRONMENT = (env.includes(CONSTANTS.ENV_PROD) ? CONSTANTS.ENV_PROD : CONSTANTS.ENV_DEV)

require("./src/index.js")