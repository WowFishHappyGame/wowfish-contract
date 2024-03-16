
import { ethers } from "hardhat"
import { WowFish } from "../typechain-types";

async function main() {
    const deployers = await ethers.getSigners();
    console.log("Deploy address: ", deployers[0].address);

    const wowfishTokenFa = await ethers.getContractFactory("WowFish")
    // const token = await wowfishTokenFa.deploy()

    const token = wowfishTokenFa.attach("0x29cf4908f743fa0EB2232C0DdB2B972EEFDFf4e9") as WowFish


    const tokenAddress = await token.getAddress()
    console.log("Token address", tokenAddress)

    const wowfishNFTFa = await ethers.getContractFactory("Barbette")
    const nft = await wowfishNFTFa.deploy()

    console.log("NFT address", await nft.getAddress())

    //deploy bank
    const wowfishBankFa = await ethers.getContractFactory("WowFishBank")
    const bank = await wowfishBankFa.deploy(tokenAddress)

    const bankAddress = await bank.getAddress()

    console.log("bank address", bankAddress)

    console.log("transfer before", bankAddress)

    console.log( await  token.balanceOf(bankAddress))

    await token.mint(bankAddress, "430000000000000000")
    
    console.log("transfer after", bankAddress)
    console.log( await token.balanceOf(bankAddress))

    //transfer owner
    console.log("begin to transfer")
    await nft.transferOwnership("0xF11BC438d9C30A99A687E129106474A71dB8a6c2")
    await bank.transferOwnership("0xF11BC438d9C30A99A687E129106474A71dB8a6c2")


    // const tx ={
    //     to :"0xF11BC438d9C30A99A687E129106474A71dB8a6c2",
    //     value: ethers.parseEther("0.001")
    // }
    // await deployers[0].sendTransaction(tx)
    console.log("end to transfer")
    
}

main().then(()=>{
    console.log("normal exit")
    process.exit(0)
}).catch((er)=>{
    console.error(er)
    process.exit(-1)
})