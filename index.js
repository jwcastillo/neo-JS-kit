var neon = require('@cityofzion/neon-js')
var Neon = neon.default
const util = require("./util.js")
const account = require("./account.js")
const neo = require("./blockchain.js")

neo.getSmartContractValue("name").then((res) => {
  console.log(res)
})

neo.getStorageValue("readtask", "newkey").then((res) => {
  console.log(res);
})

neo.testInvokeContract("registertask", "key", "value").then((res) => {
  console.log(res);
})

// neo.invokeContract("registertask", "newkey", "newvalue").then((res) =>{
//   console.log(res);
// })
