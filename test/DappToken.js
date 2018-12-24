var DappToken = artifacts.require('./DappToken.sol');

contract('DappToken', function(accounts) {
  var tokenInstance;
  var scaledSupply;

  it('allocates the initial token supply upon deployment', function() {
    return DappToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 10000000, 'sets the total supply to the 10000000');
    });
  });
});