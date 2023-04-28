// scripts/deploy-inheritance.js

const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying Inheritance contract with account:", deployer.address);

  // Inheritance contract'ını import etme
  const Inheritance = await hre.ethers.getContractFactory("Inheritance");

  // Inheritance contract'ını deploy etme
  const inheritance = await Inheritance.deploy(deployer.address);

  // Contract'ın deploy edilmesini bekleme
  await inheritance.deployed();

  console.log("Inheritance contract deployed to:", inheritance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
