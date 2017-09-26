pragma solidity ^0.4.16;
contract SendEth {
  function sendTest(){
    address a = 0x2ab9868fb0903c5029e0cc3914b0e51333c51571; //送信先のアドレスの指定
    a.transfer(5); //コントラクト・アドレスが保有するetherから指定のアドレス"a"へ5wei送金
  }
}
