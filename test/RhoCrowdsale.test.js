// test/RhoCrowdsale.test.js
// SPDX-License-Identifier: MIT

const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, ether, expectEvent, expectRevert, constants } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const RhoToken = artifacts.require('RhoToken');
const RhoCrowdsale = artifacts.require('RhoCrowdsale');

// Start test block
contract('RhoCrowdsale', function ([ creator, experimenter, wallet ]) {

  const NAME = 'RhoToken';
  const SYMBOL = 'RHO';
  const RATE = new BN(10);

  beforeEach(async function () {
    this.token = await RhoToken.new(NAME, SYMBOL, { from: creator });
    this.crowdsale = await RhoCrowdsale.new(RATE, wallet, this.token.address);
    this.token.transfer(this.crowdsale.address, await this.token.totalSupply());
  });

  it('should create crowdsale with correct parameters', async function () {
    expect(await this.crowdsale.rate()).to.be.bignumber.equal(RATE);
    expect(await this.crowdsale.wallet()).to.be.equal(wallet);
    expect(await this.crowdsale.token()).to.be.equal(this.token.address);
  });

  it('should accept payments', async function () {
    const experimentAmount = ether('1');
    const expectedTokenAmount = RATE.mul(experimentAmount);

    await this.crowdsale.buyTokens(experimenter, { value: experimentAmount, from: experimenter });

    expect(await this.token.balanceOf(experimenter)).to.be.bignumber.equal(expectedTokenAmount);
  });
});
