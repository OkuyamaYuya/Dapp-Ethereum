pragma solidity ^0.4.16;
contract SendEth {
  function sendTest(){
    address a = 0x2ab9868fb0903c5029e0cc3914b0e51333c51571;
    a.transfer(5); // send 5 wei to address a
  }
}
