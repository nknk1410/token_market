pragma solidity >=0.4.21 <0.6.0;

contract DappToken {
    string  public name = "DApp Token";
    string  public symbol = "DAPP";
    string  public standard = "DApp Token v1.0";
    uint256 public totalSupply;

    
    constructor() public {
        totalSupply = 10000000;
    }

}