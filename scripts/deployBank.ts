
import { ethers } from "hardhat"
import { WowFish } from "../typechain-types";

async function main() {
    const deployers = await ethers.getSigners();
    console.log("Deploy address: ", deployers[0].address);

    const tokenAddress = process.env.WOWFISH_TOKEN as string;

    const wowfishTokenFa = await ethers.getContractFactory("WowFish")
    const token = wowfishTokenFa.attach(tokenAddress) as WowFish

    console.log("Token address", tokenAddress)

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
    await bank.transferOwnership("0xF11BC438d9C30A99A687E129106474A71dB8a6c2")
    console.log("end to transfer")
}

main().then(()=>{
    console.log("normal exit")
    process.exit(0)
}).catch((er)=>{
    console.error(er)
    process.exit(-1)
})