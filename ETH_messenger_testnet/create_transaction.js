
// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") 
var EthereumTransaction = require("ethereumjs-tx") //module for manipulating, sigining, creating transactions
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0xEF70afe40278C334371cBa28114C7343fdAB4d53' 
var receivingAddress = '0x0B945e710738ceaE7CEC28a85D3955f08608ECCE'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

/*##########################

CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
var rawTransaction ={
    nounce: web3.utils.toHex(0),
    to: receivingAddress,
    gasPrice: web3.utils.toHex(20000000),
    gasLimit: web3.utils.toHex(30000),
    value: web3.utils.toHex(100),
    data: web3.utils.toHex("")
}



// -- Step 5: View the raw transaction rawTransaction

// -- Step 6: Check the new account balances (they should be the same) 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################

Sign the Transaction
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
var privateKeySender = 'b61ff06fe6619ef60204dc2bf6b4c41233fed4bba989c4a30d914a3f51097b8d' 
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex') 
var transaction = new EthereumTransaction.Transaction(rawTransaction)
transaction.sign(privateKeySenderHex)

/*#########################################

Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);

web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)