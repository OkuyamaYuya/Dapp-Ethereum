# Dapp-eth

## Quick `Hello World` in Ethereum

```
$ git clone this repository
$ geth --datadir eth_private init eth_private/genesis.json
$ ./compile contracts/HelloWorld.sol
```

```
$ ./open-console
> loadScript("HelloWorld.js")
> var testContract = web3.eth.contract(JSON.parse(TestOutput.contracts["contracts/HelloWorld.sol:HelloWorld"].abi));
> var test = testContract.new({ from: eth.accounts[0], data: "0x" + TestOutput.contracts["contracts/Test.sol:Test"].bin, gas: 4700000},
  function (e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  }
);
> miner.start()
> test.get()
```
