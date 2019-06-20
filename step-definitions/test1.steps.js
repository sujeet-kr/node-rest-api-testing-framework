const { Given, When, Then } = require("cucumber")
const { expect } = require("chai")
const { getRequest, postRequest } = require("../support/crud")

Given('I authenticate to the WorldClockAPI', function () {
  console.log('Authentication step')
});

Given('I authenticate to the Sample API', function () {
  console.log('Sample API Authentication')
});

Given('I prepare a request with {string} header and body as {string}', function (header, body) {
  this.setHeaderId(header)
  this.setRequestBodyId(body)
});


When('I send a GET request to the {string} endpoint', function (endpoint) {
  return getRequest(endpoint).then( res => {
    this.setResponse(res)
  })
});

When('I send a POST request to the {string} endpoint', function (endpoint) {
  return postRequest(endpoint, this.reqHeader, this.reqBody).then( res => {
    this.setResponse(res)
  })
});

Then('I should get {string} field as {string}', function (field, value) {
  console.log(this.response[field])
  console.log(this.response.data)
  expect(this.response[field]).to.be.equal(parseInt(value,10))

});