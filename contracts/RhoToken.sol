// contracts/RhoToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title RhoToken
 * All Rho Tokens are pre-assigned to the creator.
 * Creator can distribute Rho Tokens using `transfer` and other `ERC20` functions.
 */
contract RhoToken is ERC20Detailed, ERC20 {
    /**
     * Constructor that gives msg.sender all of existing tokens.
     */
    constructor(
        string memory name,
        string memory symbol
    ) public ERC20Detailed(name, symbol, 18) ERC20() {
        _mint(msg.sender, 10000 * 1e18);
    }
}
