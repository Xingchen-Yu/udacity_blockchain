var Web3 = require("web3") 
var web3 = new Web3('HTTP://127.0.0.1:7545')

web3.eth.getTransactionCount('0xEF70afe40278C334371cBa28114C7343fdAB4d53').then(console.log);