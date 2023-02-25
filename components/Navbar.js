import {VisualizarDatos, Transaccion} from "pages/transaccion.js"
import{firma}from "pages/Firma.js"

const web3 = require("@solana/web3.js");


//const fir = firma;

export default function Navbar() {
  const llamarWallet  = async () => {
    const isPhantomInstalled = window.phantom?.solana?.isPhantom
    
    
/////////////////////////////////7


////////////////////////////////////
    const getProvider = () =>{
      if('phantom' in window){
        const provider  = window.phantom?.solana;
        
        if(provider?.isPhantom){
          return provider;
          
        }
      }
      
      
    };
    
    const provider = getProvider(); // see "Detecting the Provider"
    console.log("is phantom installed 0>", isPhantomInstalled)
    console.log("provider =>", provider)
    //window.open('https://phantom.app/', '_blank');

    
  provider.on("connect", () => console.log("connected!"));
  //console.log(provider.publicKey.toString());
  // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
  console.log(provider.isConnected);
  // true
  

    try {
      const resp = await window.phantom.solana.connect();
      const publicKey = resp?.publicKey?.toString()
     
     
      console.log(VisualizarDatos)
    console.log(publicKey);
    
    } catch (error) {
      console.log("ya valio =>", error)
    }


    


  }
  
    


  return (
    <>
      <div className="flex justify-end items-center px-3 py-4 bg-gradient-to-b from-black to-white  fixed w-full h-32 ">
        <button className="bg-[#8f250c] h-16 rounded-full w-60" onClick={firma}>
            <h1 className="text-bold text-4xl text-white">Wallet</h1>
        </button>
      </div>
    </>
    
  );
  }
  