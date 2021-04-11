// migrations/2_deploy.js
const RhoToken = artifacts.require('RhoToken');

module.exports = async function (deployer) {
  await deployer.deploy(RhoToken, 'RhoToken', 'RHO', '10000000000000000000000');
};
