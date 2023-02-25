
import MainLayout from "../components/layouts/MainLayout"
import Image from "next/image";
export default function Home() {
  
  return (
    <MainLayout>
      Oliwi n.n uwu
    </MainLayout>
  ) 
  
  }


export default function Example(){
  function llamarWallet(){
    const isPhantom = window.phantom?.solana?.isPhantom;

    const getProvider= () =>{
        if('phantom' in window){
            const provider = window.phantom?.solana;

            if(provider?.isPhantom){
                return provider;
            }else{
                console.log('Algo falló aki');
            }
        }
        window.open('https://phantom.app/','_blank');
    };
    const provider = getProvider();
    
    try{
        const resp = window.phantom.solana.connect();
        console.log(resp.publicKey.toString());

    }catch(err){

    }

  }
 return(
    <form onSubmit={llamarWallet}>
      <button type="wallet">wallet</button>
    </form>
 );



}
