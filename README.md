# Dapp-eth


## Quick `Hello World` in Ethereum

```sh
$ git clone this repository
```

Initialize Ethereum private network.
```sh
$ geth --datadir eth_private init eth_private/genesis.json
```

Next, Compile solidity program by solc and produce javascript file.
```sh
$ ./compile contracts/HelloWorld.sol
```

Finally, open console.
```sh
$ ./open-console
> loadScript("js/HelloWorld.js")
> miner.start()
> test.get()
"HelloWorld!!"
```
