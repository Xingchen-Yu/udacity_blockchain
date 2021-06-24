// Importing the StartNotary Smart Contract ABI (JSON representation of the Smart Contract)
const StarNotary = artifacts.require("StarNotary");

var accounts; // List of development accounts provided by Truffle
var owner; // Global variable use it in the tests cases

// This called the StartNotary Smart contract and initialize it
contract('StarNotary', (accs) => { //automatically getting accounts into the function from JVM
    accounts = accs; // Assigning test accounts
    owner = accounts[0]; // Assigning the owner test account
});

// Example test case, it will test if the contract is able to return the starName property 
// initialized in the contract constructor
it('has correct name', async () => {
    let instance = await StarNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
    let starName = await instance.starName.call(); // Calling the starName property, function call that won't change any data or incur transaction cost.
    assert.equal(starName, "Awesome Udacity Star"); // Assert if the starName property was initialized correctly
});

// Example test case, it will test is the Smart Contract function claimStar assigned the Star to the owner address
it('can be claimed', async () => {
    let instance = await StarNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
    await instance.claimStar({from: owner}); // Calling the Smart Contract function claimStar
    let starOwner = await instance.starOwner.call(); // Getting the owner address
    assert.equal(starOwner, owner); // Verifying if the owner address match with owner of the address
});

// Example test case, it will test is the Smart Contract function claimStar assigned the Star to the owner address and it can be changed
it('can change owners', async () => {
    let instance = await StarNotary.deployed();
    let secondUser = accounts[1];
    await instance.claimStar({from: owner});
    let starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);
    await instance.claimStar({from: secondUser});
    let secondOwner = await instance.starOwner.call();
    assert.equal(secondOwner, secondUser);
 });

 //write a corresponding test ot make sure that you are able to change the name of the star

 it('can change the name yolo',async() =>{
     let instance = await StarNotary.deployed();
     let secondUser = accounts[1];
     let new_name = 'Yolo 42069';
     await instance.claimStar({from: owner});
     //Modified since solution will allow anyone to change name of the star rather than just the owner
     //Change `owner` to `secondUser` will fail the test now.
     await instance.changeName(new_name,{from:owner});
     assert.equal(await instance.starName.call(),new_name);

 })