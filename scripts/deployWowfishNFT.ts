
import { ethers } from "hardhat"

async function main() {
    const deployers = await ethers.getSigners();
    console.log("Deploy address: ", deployers[0].address);

    const wowfishTokenFa = await ethers.getContractFactory("Barbette")
    const token = await wowfishTokenFa.deploy()

   console.log("NFT address", await token.getAddress())
}

main().then(()=>{
    console.log("normal exit")
    process.exit(0)
}).catch((er)=>{
    console.error(er)
    process.exit(-1)
})