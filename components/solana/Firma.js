

    
    
 


const {signAndSendTransaction} = require("@solana/web3.js");
const firma = async  () =>{
    try {
        const signature = await signAndSendTransaction(Transaccion);
        createLog({
          status: 'info',
          method: 'signAndSendTransaction',
          message: `Signed and submitted transaction ${signature}.`,
        });
        pollSignatureStatus(signature, connection, createLog);
        console.log("Cosa cososa")
      } catch (error) {
        console.log("error", error)
      }

}

   
  