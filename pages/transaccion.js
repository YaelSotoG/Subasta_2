import solanaweb3 from "@solana/web3.js"
import bs58 from "bs58";



// const connection = new solanaweb3.Connection("https://api.testnet.solana.com"); //no jala nada de esto :v



// const senderBalance = solanaweb3.Keypair.fromSecretKey(
//     bs58.decode(
//         "BDoFfKdpZp5yzEKyQiPW4cgXMcrdx6ZJpdpwoFgLQX9N"
//     )
// );
// const receiverBalance = solanaweb3.Keypair.fromSecretKey(
//     bs58.decode(
//         "B6RMXXLvcNchS2AXApvnXm5X97APWMAR8AaRHuHjACJS"
//     )
// );

// const visualizarDAtos = async () => {
//     let senderBalance = await connection.getBalance(senderBalance.publicKey);
//     let receiverBalance = await connection.getBalance(receiverBalance.publicKey);
//     console.log(
//       `Sender Balance: ${senderBalance / solanaweb3.LAMPORTS_PER_SOL} SOL`
//     );
//     console.log(
//       `Receiver Balance: ${receiverBalance / solanaweb3.LAMPORTS_PER_SOL} SOL`
//     );
//   };

//   const Transaccion = async () => {
//     let transaction = new solanaweb3.Transaction().add(
//       solanaweb3.SystemProgram.transfer({
//         fromPubkey: senderWallet.publicKey,
//         toPubkey: receiverWallet.publicKey,
//         lamports: 2 * solanaweb3.LAMPORTS_PER_SOL,
//       })
//     );
//     transaction.feePayer = senderWallet.publicKey;
//     let transactionHash = await connection.sendTransaction(transaction, [
//       senderWallet,
//       receiverWallet,
//     ]);
//     console.log(`${transactionHash}`);
//   };
