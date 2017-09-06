var TestOutput = {"contracts":{"contracts/Test.sol:Test":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"value\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]","bin":"60606040523415600e57600080fd5b5b607b6000555b5b6090806100246000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633fa4f2458114603c575b600080fd5b3415604657600080fd5b604c605e565b60405190815260200160405180910390f35b600054815600a165627a7a723058204159f1702fbe0ca1b6944e61a4021ef829c2e4c2e176f62b86f7ac995376ec760029"}},"version":"0.4.16+commit.d7661dd9.Darwin.appleclang"}
var testContract = web3.eth.contract(JSON.parse(TestOutput.contracts["contracts/Test.sol:Test"].abi));
personal.unlockAccount(eth.accounts[0], "nun");
var test = testContract.new({ from: eth.accounts[0], data: "0x" + TestOutput.contracts["contracts/Test.sol:Test"].bin, gas: 4700000},
  function (e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  }
);
