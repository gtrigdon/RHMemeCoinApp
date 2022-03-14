// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [owner] = await hre.ethers.getSigners();
  const RigdonhouseMemeCoinContractFactory = await hre.ethers.getContractFactory("RigdonhouseMemeCoin");
  const RigdonhouseMemeCoinContract = await RigdonhouseMemeCoinContractFactory.deploy();
  await RigdonhouseMemeCoinContract.deployed();

  console.log("RigdonhouseMemeCoinContract deployed to:", RigdonhouseMemeCoinContract.address);
  console.log("RigdonhouseMemeCoinContract owner address:", owner.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


//Open a new terminal and deploy the smart contract in the localhost network
//npx hardhat run scripts/deploy.js

//Open a new terminal and deploy the smart contract in the Rinkeby Test network
//npx hardhat run scripts/deploy.js --network rinkeby

//PS C:\BlockChainDev\cadena\rigdonhouseDAO-smartcontract> npx hardhat run scripts/deploy.js --network rinkeby
//RigdonhouseMemeCoinContract deployed to: 0xE9f84919ffAAD01E39eC4a20b3B82DA43Ae91EFA
//RigdonhouseMemeCoinContract owner address: 0xEB3759F9539fB2DC1810b22eFfe3bA2c1e06e80E