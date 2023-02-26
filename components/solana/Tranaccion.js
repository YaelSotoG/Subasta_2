const transaccion  = async () => {
  const web3 =  require("@solana/web3.js");
    
  (async () => {
    
    console.log(web3.clusterApiUrl('devnet'))
    const connection = new web3.Connection(
      web3.clusterApiUrl('devnet'),
      'confirmed',
    );

    console.log(await connection.getEpochInfo())
  
    const from = web3.Keypair.generate();
    
    const fromAirDropSignature = await connection.requestAirdrop(from.publicKey, 1 * web3.LAMPORTS_PER_SOL)
    await connection.confirmTransaction(fromAirDropSignature);
  
  
    
    const to = web3.Keypair.generate();
  
    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to.publicKey,
        lamports: 100000,
      }),2
    );
    
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [from],
    );
    console.log('SIGNATURE', signature);
  })();
};