// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Box {
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

}

// contract.address1  => 0x272204ddaEFE42f0e2b70Dc1B211bCCb84d7344D