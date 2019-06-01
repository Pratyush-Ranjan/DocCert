var doccertContract = artifacts.require("doccert");
module.exports = function(deployer) {
  deployer.deploy(doccertContract);
};
