
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title CheckIn
 * @dev A contract that calls the checkIn function on the BatchRegistry contract
 * @notice This contract is used to check-in to the BatchRegistry
 */

// Interface for the BatchRegistry contract
interface IBatchRegistry {
    function checkIn() external;
    function yourContractAddress(address builder) external view returns (address);
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    event CheckedIn(address indexed builder, uint256 timestamp);

    constructor(address _batchRegistryAddress) Ownable(msg.sender) {
        batchRegistry = IBatchRegistry(_batchRegistryAddress);
    }

    /**
     * @dev Calls the checkIn function on the BatchRegistry contract
     * @notice Only the owner can call this function to prevent others from checking in on your behalf
     */
    function checkMeIn() public onlyOwner {
        batchRegistry.checkIn();
        emit CheckedIn(msg.sender, block.timestamp);
    }

    /**
     * @dev Returns the contract address that checked in for a given builder
     * @param builder The address of the builder
     * @return The contract address that checked in
     */
    function getMyContractAddress(address builder) public view returns (address) {
        return batchRegistry.yourContractAddress(builder);
    }
}

