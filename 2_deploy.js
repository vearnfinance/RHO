// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const RhoToken = artifacts.require("RhoToken");
const RhoCrowdsale = artifacts.require("RhoCrowdsale");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(RhoToken, 'Rho Token', 'RHO', '10000000000000000000000');
  const token = await RhoToken.deployed();
  
  await deployer.deploy(RhoCrowdsale, 1, accounts[0], token.address);
  const crowdsale = await RhoCrowdsale.deployed();

  token.transfer(crowdsale.address, await token.totalSupply())
};
