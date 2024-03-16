
//0xdFCFCFFB9354407F3809F999f0b1fFD1f6899162

import { ethers } from "hardhat"
import { Barbette } from "../typechain-types";

async function main() {
    const deployers = await ethers.getSigners();
    console.log("Deploy address: ", deployers[0].address);

    const gameCenter = "0x6f61F64783cfa225E8431845103F6B04ba0C877D"
    const gameDispose = "0x7C23eb8F66915597bAC2a6CF1B05369cb2d40F75"
    const gameAdmin = "0xF11BC438d9C30A99A687E129106474A71dB8a6c2"

    console.log("game center ",await ethers.provider.getBalance(gameCenter)) 
    console.log("game dispose ",await ethers.provider.getBalance(gameDispose)) 
    console.log("game admin ",await ethers.provider.getBalance(gameAdmin)) 

    // const tx = {
    //     to:gameCenter,
    //     value:ethers.parseEther("0.002")
    // }

    // await deployers[0].sendTransaction(tx)

    // const tx1 = {
    //     to:gameDispose,
    //     value:ethers.parseEther("0.002")
    // }

    // await deployers[0].sendTransaction(tx1)

    // const tx2 = {
    //     to:gameAdmin,
    //     value:ethers.parseEther("0.002")
    // }

    // await deployers[0].sendTransaction(tx2)

    console.log("game center ",await ethers.provider.getBalance(gameCenter)) 
    console.log("game dispose ",await ethers.provider.getBalance(gameDispose)) 
    console.log("game admin ",await ethers.provider.getBalance(gameAdmin)) 
}

main().then(() => {
    console.log("normal exit")
    process.exit(0)
}).catch((er) => {
    console.error(er)
    process.exit(-1)
})