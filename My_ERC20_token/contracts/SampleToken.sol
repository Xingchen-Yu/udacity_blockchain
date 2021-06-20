// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract SampleToken is ERC20 {
    constructor(uint _initialSupply,string memory coin_name,string memory coin_symbol) 
    ERC20(coin_name,coin_symbol) {
        require(_initialSupply > 0, "INITIAL_SUPPLY has to be greater than 0");
        _mint(msg.sender, _initialSupply);
    }
}