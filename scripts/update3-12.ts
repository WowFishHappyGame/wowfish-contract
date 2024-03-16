//430

import { ethers } from "hardhat"
import { Barbette, WowFish } from "../typechain-types"

async function main() {

    const deployer = await ethers.getSigners()
    console.log("deployer", deployer[0].getAddress())

    const tokenAddress = process.env.WOWFISH_TOKEN as string
    const nftAddress = process.env.WOWFISH_NFT as string

    //deploy bank
    const wowfishBankFa = await ethers.getContractFactory("WowFishBank")
    const bank = await wowfishBankFa.deploy(tokenAddress)

    console.log("bank address", await bank.getAddress())

    const toAdress = await bank.getAddress()
    const wowfishTokenFa = await ethers.getContractFactory("WowFish")

    const token = wowfishTokenFa.attach(tokenAddress) as WowFish

    console.log("transfer before", toAdress)

    console.log( await  token.balanceOf(toAdress))

    await token.mint(toAdress, "430000000000000000")
    
    console.log("transfer after", toAdress)
    console.log( await token.balanceOf(toAdress))

    //transfer owner
    console.log("begin to transfer")
    const wowfishNftFa = await ethers.getContractFactory("Barbette")
    const nft = wowfishNftFa.attach(nftAddress) as Barbette
    await nft.transferOwnership("0xF11BC438d9C30A99A687E129106474A71dB8a6c2")

    await bank.transferOwnership("0xF11BC438d9C30A99A687E129106474A71dB8a6c2")

    const tx ={
        to :"0xF11BC438d9C30A99A687E129106474A71dB8a6c2",
        value: ethers.parseEther("0.001")
    }
    await deployer[0].sendTransaction(tx)


    console.log("end to transfer")
    // tx = {
    //     to:"0xEF62f0cf0b67B789BBb45f73125cc308b3c53c3d",
    //     value: ethers.parseEther("1")
    // }


    // await signers[0].sendTransaction(tx)

}

main().then(()=>{
    process.exit(0)
}).catch(()=>{
    process.exit(-1)
})