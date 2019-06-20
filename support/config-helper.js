const YamlEnvRead = require('./yaml-reader')

const environmentData = YamlEnvRead.yamlDataAsObject('./resources/env-url.yml')

module.exports = {
    getBaseURL: ()=> {
        return environmentData[process.env.ENV].base_url
    }
}