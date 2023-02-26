



export default function Navbar() {
 const llamarWallet  = async () => {
     const isPhantomInstalled = window.phantom?.solana?.isPhantom
    
    
    const getProvider = () =>{
      if('phantom' in window){
        const provider  = window.phantom?.solana;
        
     if(provider?.isPhantom){
       return provider;
          
        }else{
          window.open('https://phantom.app/', '_blank');
        }
       }
      
      
     };
    
     const provider = getProvider(); // see "Detecting the Provider"
     console.log("is phantom installed 0>", isPhantomInstalled)
     console.log("provider =>", provider)
     //window.open('https://phantom.app/', '_blank');

    
   provider.on("connect", () => console.log("connected!"));

  
   var Boton;
    try {
      resp = await window.phantom.solana.connect();
      const publicKey = resp?.publicKey?.toString()
      
     
      console.log(VisualizarDatos)
      console.log(publicKey);

  
     } catch (error) {
       console.log("ya valio =>", error)
     }
     
    


    


  }
  return (
    <>
    
      <div className="pl-0 pt-0 grid grid-cols-2 items-center px-3 py-4 bg-gradient-to-b from-black to-white  fixed w-full h-32 z-50 ">
        <div className="border-0 m-0">
      <img className="w-28 h-28" src="/images/logo.jpg"></img>
          
        </div>
        <div className="flex justify-end">
      <button class="group relative h-16 w-60 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={llamarWallet}>
      <div class="absolute inset-0 w-3 bg-[#8f250c] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span class="relative text-bold text-4xl text-[#8f250c] group-hover:text-white">LOG IN</span>
      </button>
      </div>
     
      </div>
    </>
    
  );
  }
  