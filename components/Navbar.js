import Image from "next/image";

const people = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

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
      window.open('https://phantom.app/', '_blank');
      
    };
    
    const provider = getProvider(); // see "Detecting the Provider"
    console.log("is phantom installed 0>", isPhantomInstalled)
    console.log("provider =>", provider)

    
  provider.on("connect", () => console.log("connected!"));
  //console.log(provider.publicKey.toString());
  // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
  console.log(provider.isConnected);
  // true

    try {
      const resp = await window.phantom.solana.connect();
      const publicKey = resp?.publicKey?.toString()
    console.log(publicKey);
    } catch (error) {
      console.log("ya valio =>", error)
    }


  }
  return (
    <>
      <div className="flex justify-end items-center px-3 py-4 bg-gradient-to-b from-black to-white  fixed w-full h-32 ">
        <button className="bg-[#8f250c] h-16 rounded-full w-60" onClick={llamarWallet}>
            <h1 className="text-bold text-4xl text-white">Wallet</h1>
        </button>
      </div>
    </>
    
  );
}
