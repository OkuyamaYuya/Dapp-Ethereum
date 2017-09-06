var TestOutput = {"contracts":{"contracts/SingleNumRegister.sol:SingleNumRegister":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"set\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"get\",\"outputs\":[{\"name\":\"retVal\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]","bin":"6060604052341561000f57600080fd5b5b60b98061001e6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166360fe47b1811460465780636d4ce63c14605b575b600080fd5b3415605057600080fd5b6059600435607d565b005b3415606557600080fd5b606b6086565b60405190815260200160405180910390f35b60008190555b50565b6000545b905600a165627a7a72305820a9fb7d43d72f378264f73e19f9a56bc390367a922e0ec566554feced3790a2210029"}},"version":"0.4.16+commit.d7661dd9.Darwin.appleclang"}
var testContract = web3.eth.contract(JSON.parse(TestOutput.contracts["contracts/SingleNumRegister.sol:SingleNumRegister"].abi));
personal.unlockAccount(eth.accounts[0], "nun");
var test = testContract.new({ from: eth.accounts[0], data: "0x" + TestOutput.contracts["contracts/SingleNumRegister.sol:SingleNumRegister"].bin, gas: 4700000},
  function (e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  }
);
