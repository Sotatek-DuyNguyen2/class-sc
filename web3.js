require('dotenv').config()
const Web3 = require('web3');
const PROVIDER = 'https://rinkeby.infura.io/v3/710b741fe9924cc8a5fa4fa20a89e620';
// Variables definition
const privKey = process.env.PRIVATE_KEY; // Genesis private key
const addressFrom = process.env.ADDRESS_FROM;
const addressTo = process.env.ADDRESS_TO;
const web3 = new Web3(PROVIDER);

// Create transaction
const deploy = async () => {
   console.log(
      `Attempting to make transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei('0.001', 'ether'),
         gas: '21000',
      },
      privKey
   );

   // Deploy transaction
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );
};

deploy();