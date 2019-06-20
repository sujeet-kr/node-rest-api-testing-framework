const axios = require ('axios')
const getConfig = require('./config')
const requestParameters = require('../resources/datafiles/request-parameters.json')
const requestBody = require('../resources/datafiles/request-body.json')
const requestHeader = require('../resources/datafiles/request-headers.json')

module.exports = {
    getRequest: async (endpoint,paramsId,headersId) => {
        try {
            const config = getConfig(endpoint, 'GET', requestParameters[paramsId], requestHeader[headersId])
            const response = await axios.request(config)
            return response
          } catch (error) {
            console.error(error.response.data);
          }
      },
    
      postRequest: async (endpoint,headersId,reqBodyId,paramsId) => {
        try {
          const config = getConfig(endpoint, 'POST',requestParameters[paramsId],requestHeader[headersId], requestBody[reqBodyId])
            const response = await axios.request(config)
            return response
          } catch (error) {
            console.error(error.response.data);
          }
      }
}
