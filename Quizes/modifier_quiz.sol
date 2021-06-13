pragma solidity >=0.4.24;

contract modifier_revert {
    
    uint public minimum = 100;
    
    modifier check_minimum {
        if(msg.value >= minimum){
            _;
        }else{
            revert("The minimum amount is not met, please increase your bet");
        }
    }
    
    function bid_winner () payable check_minimum public returns(string memory out){
        out = "Your bid is accepted";
    }
}