# Hello-Ethereum

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
$ ./bin/compile contracts/HelloWorld.sol
```

Finally, open console.
```sh
$ ./bin/open-console
> miner.start()
> loadScript("js/HelloWorld.js")
> test.get()
"HelloWorld!!"
```
