var TestOutput = {"contracts":{"contracts/HelloWorld.sol:HelloWorld":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"get\",\"outputs\":[{\"name\":\"retVal\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]","bin":"6060604052341561000f57600080fd5b5b6101488061001f6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636d4ce63c811461003d575b600080fd5b341561004857600080fd5b6100506100c8565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561008d5780820151818401525b602001610074565b50505050905090810190601f1680156100ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d061010a565b60408051908101604052600c81527f48656c6c6f576f726c6421210000000000000000000000000000000000000000602082015290505b90565b602060405190810160405260008152905600a165627a7a7230582014fd1d1aa3e2710bbd05a910bb509337ecf97dbc0c8b24956342a49ce5caf5b80029"}},"version":"0.4.16+commit.d7661dd9.Darwin.appleclang"}
var testContract = web3.eth.contract(JSON.parse(TestOutput.contracts["contracts/HelloWorld.sol:HelloWorld"].abi));
personal.unlockAccount(eth.accounts[0], "nun");
var test = testContract.new({ from: eth.accounts[0], data: "0x" + TestOutput.contracts["contracts/HelloWorld.sol:HelloWorld"].bin, gas: 4700000},
  function (e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  }
);
