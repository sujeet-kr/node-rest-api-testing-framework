const { setWorldConstructor } = require("cucumber");

class CustomWorld {
  constructor() {
    this.response = null
    this.reqHeader = null
    this.reqBody = null
  }

  setResponse(res) {
    this.response = res;
  }

  setHeaderId(header){
    this.reqHeader = header
  }
  
  setRequestBodyId(body){
    this.reqBody = body
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);