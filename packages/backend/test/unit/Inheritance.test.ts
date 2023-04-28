// test/Inheritance.test.ts

import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { Contract, Signer } from "ethers";

describe("Inheritance", function () {
  let Inheritance: Contract;
  let inheritance: Contract;
  let owner, beneficiary;
  let ownerAddress: string;
  let beneficiaryAddress: string;

  beforeEach(async function () {
    // Get the signers and addresses
    [owner, beneficiary] = await ethers.getSigners();
    ownerAddress = await owner.getAddress();
    beneficiaryAddress = await beneficiary.getAddress();

    // Compile and deploy the Inheritance contract
    Inheritance = await ethers.getContractFactory("Inheritance");
    inheritance = await Inheritance.deploy(ownerAddress);
    await inheritance.deployed();
  });

  describe("Deployment", function () {
    it("Owner should be set to the deployer's address", async function () {
      expect(await inheritance.owner()).to.equal(ownerAddress);
    });

    // Other deployment tests can go here...
  });

  describe("Functionality", function () {
    // Functionality-related tests can go here...
  });
});
