
import { ethers } from "hardhat"
import { Barbette } from "../typechain-types";

async function main() {
    const deployers = await ethers.getSigners();
    console.log("Deploy address: ", deployers[0].address);

    const wowfishTokenFa = await ethers.getContractFactory("Barbette")
    const token = wowfishTokenFa.attach(process.env.WOWFISH_NFT as string) as Barbette

    //ids 
    /**
     * 100109 -
     * 100164 -
     * 100165 -
     * 100166 -
     * 100167 -
     * 100168 -
     * 100169 -
     * 100170
     * 100171
     * 100172
     */

    //to address 0xEF62f0cf0b67B789BBb45f73125cc308b3c53c3d
    const to = "0x6eABf91B46eC90eeEDE4454cC30e12F1E68D9608"
    await token.safeMint(to, 100169, "")
    console.log(`mint nft to ${to} sucess`)
}

main().then(() => {
    console.log("normal exit")
    process.exit(0)
}).catch((er) => {
    console.error(er)
    process.exit(-1)
})