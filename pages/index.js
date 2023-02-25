
import MainLayout from "../components/layouts/MainLayout"
import Heater from "../components/Heater"

export default function Home() {
return (
  <MainLayout>
    <Heater />
  </MainLayout>
) 

  
  }

  export  function Example(){
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
          console.log('se llamó al fanton we')
  
      }catch(err){
  
      }
  
    }
   return(
      <form onSubmit={llamarWallet}>
        <button type="wallet">wallet</button>
      </form>
   );
  
  
  
  }


