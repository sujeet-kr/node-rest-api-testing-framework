# API Test Automation Framework

## Execute Test with Step definition and support files at non-standard locations

* `npm run --silent test-dev`

##### ***OR to execute with options***

* `npm run --silent test-dev -- --tags @test`

## To generate step definition snippets for un implemented feature steps

* `npm run snippets`

## Setting up data
* json files under resources/datafiles can be used to parameterize request **body**, **headers**, **parameters**. 
* Data should be passed as an object.

## Setting up data in World object

* Create a Setter in world.js
* Initialize the variable used by setter in the constructor of the World.js class
* Call the setter to set value from any step using `this.setterFunctionName(data)`
* Use the value from any step using `this.dataVariableName`

## API Request format
### - GET Requests
* In the step definition use `getRequest(endpoint, paramsId,headersId)` 
* Use thenable to set response to world object. Like ```getRequest(endpoint).then( data => {
    this.setResponse(data)
  })```
