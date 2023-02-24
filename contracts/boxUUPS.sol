// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';

contract BoxUUPS is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 private value;

    // si algun contrato parent tiene un inicializador (Constructor), debe llamarse dentro de  initialize()
    function initialize() initializer public {
        __Ownable_init();
        set(42);
        }    

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

        
    function _authorizeUpgrade(address  newImplementation) internal override onlyOwner {}

    function checkOunerCHII()  public view returns (address) {
        return owner();
    }
}

// contract.address1  => 0x272204ddaEFE42f0e2b70Dc1B211bCCb84d7344D