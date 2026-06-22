const { Contract, ethers } = require("ethers");

const abi = [
  "function buyWithUSDT(uint256 _USDTAmount)"
];

const contract = new Contract(ethers.ZeroAddress, abi);

console.log(typeof contract.buyWithUSDT);
console.log(typeof contract.buyWithUSDT.estimateGas);
console.log(typeof contract.getFunction("buyWithUSDT").estimateGas);
