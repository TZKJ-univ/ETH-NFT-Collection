const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MyEpicNFT", function () {
    async function deployMyEpicNFTFixture() {

        const [owner] = await ethers.getSigners();

        const firstWords = [
            "Boop", "Bop", "Bee", "Bar", "Baz", "Bro"
        ];
        const secondWords = [
            "Cry", "Cli", "CSV", "Cup", "Cip", "Cre"
        ];
        const thirdWords = [
            "Dop", "Dip", "Dap", "Dpp", "Dup", "Dep"
        ];

        const MyEpicNFTFactory = await ethers.getContractFactory("MyEpicNFT");
        const MyEpicNFT = await MyEpicNFTFactory.deploy();

        return { MyEpicNFT, owner, firstWords, secondWords, thirdWords };
    }

    describe("pickRandomFirstWord", function () {
        it("should get string in firstWords", async function() {
            const { MyEpicNFT, firstWords } = await loadFixture(
                deployMyEpicNFTFixture
            );

            expect(firstWords).to.include(await MyEpicNFT.pickRandomFirstWord(0));
        });
    });

    describe("pickRandomSecondWOrd", function () {
        it("should get string in secondWords", async function() {
            const { MyEpicNFT, secondWords } = await loadFixture(
                deployMyEpicNFTFixture
            );

            expect(secondWords).to.include(await MyEpicNFT.pickRandomSecondWord(0));
        });
    });

    describe("pickRandomThirdWord", function () {
        it("should get string in thirdWords", async function() {
            const { MyEpicNFT, thirdWords } = await loadFixture(
                deployMyEpicNFTFixture
            );

            expect(thirdWords).to.include(await MyEpicNFT.pickRandomThirdWord(0));
        });
    });
});