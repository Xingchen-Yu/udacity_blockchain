// SPDX-License-Identifier: MIT 
pragma solidity >=0.8.1;

contract StarNotary {

    string public starName;
    address public starOwner;

    event starClaimed(address owner);

    constructor() {
        starName = "Awesome Udacity Star";
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(msg.sender);
    }
    //part of the quiz function
    function changeName(string memory new_name) public{
        if(starOwner!=msg.sender){
            revert("bro you are overreaching, it ain't your star");
        }else{
            starName = new_name;
        }
    }

}