import {VisualizarDatos, Transaccion} from "pages/transaccion.js"




export default function Navbar() {
 const llamarWallet  = async () => {
     const isPhantomInstalled = window.phantom?.solana?.isPhantom
    
    
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
        <button className="bg-[#8f250c] h-16 rounded-full w-60" onClick={llamarWallet}>
            <h1 className="text-bold text-4xl text-white">Login</h1>
        </button>
      </div>
    </>
    
  );
  }
  