require('dotenv').config()
const ethers = require('ethers')


const provider = ethers.getDefaultProvider('rinkeby')

const privateKey = process.env.PRIVATE_KEY

const wallet = new ethers.Wallet(privateKey, provider)

const amountInEther = '0.001'

const tx = {
    to: process.env.ADDRESS_TO,
    value: ethers.utils.parseEther(amountInEther)
}

wallet.sendTransaction(tx)
.then((txObj) => {
    console.log('txHash', txObj.hash)
})