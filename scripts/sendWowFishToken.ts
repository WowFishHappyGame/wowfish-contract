
import { ethers } from "hardhat"
import { WowFish } from "../typechain-types"

async function main() {

    const toAdress = "0x6f61F64783cfa225E8431845103F6B04ba0C877D"
    const tokenAddress = process.env.WOWFISH_TOKEN as string
    const wowfishTokenFa = await ethers.getContractFactory("WowFish")

    const token = wowfishTokenFa.attach(tokenAddress) as WowFish

    console.log("transfer before", await  token.balanceOf(toAdress))

    await token.transfer(toAdress,  1000000000)
    
    console.log("transfer after", await  token.balanceOf(toAdress))

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