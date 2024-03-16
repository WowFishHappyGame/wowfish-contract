
//0xdFCFCFFB9354407F3809F999f0b1fFD1f6899162

import { ethers } from "hardhat"
import { Barbette } from "../typechain-types";

async function main() {
    const deployers = await ethers.getSigners();
    console.log("Deploy address: ", deployers[0].address);

    const wowfishTokenFa = await ethers.getContractFactory("Barbette")
    const token = wowfishTokenFa.attach("0xdFCFCFFB9354407F3809F999f0b1fFD1f6899162") as Barbette

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
    const to = "0xEF62f0cf0b67B789BBb45f73125cc308b3c53c3d"
    await token.safeMint(to, 100178, "ipfs://bafkreia47n4jjq3cmav5subkutzze36gfxhufk4tmzrvy3zywqrm5g6lfi")
    console.log(`mint nft to ${to} sucess`)

    // console.log( await token.tokenURI(100175))
}

main().then(() => {
    console.log("normal exit")
    process.exit(0)
}).catch((er) => {
    console.error(er)
    process.exit(-1)
})