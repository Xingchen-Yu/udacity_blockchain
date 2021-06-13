pragma solidity >=0.4.24;

contract stringsContract {
    function string_conversion_index(string memory name, uint index) public pure returns(byte) {
        bytes memory name_converted = bytes(name);  
        return name_converted[index]; 
    }
}