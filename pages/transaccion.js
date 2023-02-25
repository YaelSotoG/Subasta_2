/*



const web3 = require("@solana/web3.js");

let payer = web3.Keypair.generate();
let connection = new web3.Connection(web3.clusterApiUrl("testnet"), "confirmed"); 

let toAccount = web3.Keypair.generate();

let transaction = new web3.Transaction();



transaction.add(
    web3.SystemProgram.transfer({
        fromPubkey: payer.publicKey,
        toPubkey: toAccount.publicKey,
        lamports: 1000,}
    ),
);

webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      
    }
 web3.sendAndConfirmTransaction(connection, transaction, [payer]);
    console.log("Que mando aki? a")
    return config
    
  }




*/ 


