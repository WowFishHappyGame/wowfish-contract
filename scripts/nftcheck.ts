
import { ethers } from "hardhat"
import { Barbette } from "../typechain-types";

async function main() {
    const deployers = await ethers.getSigners();
    console.log("Deploy address: ", deployers[0].address);

    const wowfishTokenFa = await ethers.getContractFactory("Barbette")
    const token = wowfishTokenFa.attach(process.env.WOWFISH_NFT as string) as Barbette

    console.log("nft is ",  await token.ownerOf(100109))

    const to = "0xEF62f0cf0b67B789BBb45f73125cc308b3c53c3d"
    const count = await token.balanceOf(to)
    console.log(`nft owner ${count}`)
    if (count > 0)
    {
        const tid = await token.tokenOfOwnerByIndex(to, 0)
        console.log(`nft id ${tid}`)
    }
   
}

main().then(() => {
    console.log("normal exit")
    process.exit(0)
}).catch((er) => {
    console.error(er)
    process.exit(-1)
})