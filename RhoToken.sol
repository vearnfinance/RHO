// contracts/RhoToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title RhoToken
 * All Rho Tokens are pre-assigned to the creator.
 * Creator can distribute Rho Tokens using `transfer` and other `ERC20` functions.
 
contract RhoToken is ERC20 {
    /**
     * Constructor that gives msg.sender all of existing tokens.
     */
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) public ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }
}
