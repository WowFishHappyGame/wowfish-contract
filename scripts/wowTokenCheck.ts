
import { ethers } from "hardhat"
import { WowFish } from "../typechain-types"

async function main() {

   // const checkaddress = "0x6f61F64783cfa225E8431845103F6B04ba0C877D"

   console.log(await ethers.provider.getBalance("0xf6c43e82e4b66ae7307b251d4215932204e75109"))

// 0.000100000000000000
// 00000088443400000000
// 0.000011556600000000
// 0.000003852200000000

   const checkaddress = "0x7A10D3eaf2e8850F6755B9093f65867e8D5a86e2"
    //const tokenAddress = process.env.WOWFISH_TOKEN as string
    const tokenAddress = "0xC95c4D21148FDA28cB86386C48Af62A437ee9fE4"
    const wowfishTokenFa = await ethers.getContractFactory("WowFish")

    const token = wowfishTokenFa.attach(tokenAddress) as WowFish
    console.log("decimals", await token.decimals())
    console.log("transfer before", await  token.balanceOf(checkaddress))

    // const lo = await ethers.provider.getTransaction("0xba37c59dc98e2be2bf49e33e430517e86e83b2d9c4075e4939a92f51222eecaa")
    // console.log(lo)
    // const lo = await ethers.provider.getTransactionReceipt("0x7ca25633970b4cf41d2317e3c280df753e4f980ae5007c4ae856d8b3eb0b5fea")
    // console.log(lo)
    // const lo =await ethers.provider.getLogs({blockHash: "0x55760f8fe9ab288d07a3d1e872a45501063a52084fcdec83439228e612e9eab2"})
    // console.log(lo)
}

main().then(()=>{
    process.exit(0)
}).catch(()=>{
    process.exit(-1)
})