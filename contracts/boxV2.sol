// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxV2 {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function set(uint256 _value) public {
        value = _value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function get() public view returns (uint256) {
        return value;
    }

        function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }
}