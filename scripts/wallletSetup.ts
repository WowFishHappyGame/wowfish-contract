
import { ethers } from "hardhat"
import { WowFish } from "../typechain-types"

async function main() {

    const gameAdress =  "0x6f61F64783cfa225E8431845103F6B04ba0C877D"
    const gantAdress = "0x4f1B2037f95c12e9d5EB6319cfdB0c6728e8694C"
    const disposeAdress = "0x7C23eb8F66915597bAC2a6CF1B05369cb2d40F75"

    const wallets = [gameAdress, gantAdress, disposeAdress]

    for( const w of wallets){
        const befor = await ethers.provider.getBalance(w)
        console.log("before setup",  w , "amount", befor)
        //send eth
        let tx = {
            to:w,
            value: ethers.parseEther("0.001")
        }

        const signers = await ethers.getSigners()
        await signers[0].sendTransaction(tx)

        const after = await ethers.provider.getBalance(w)
        console.log("after setup",  w , "amount", after)
    }

}

main().then(()=>{
    process.exit(0)
}).catch(()=>{
    process.exit(-1)
})