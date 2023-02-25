import {useEffect} from 'react'
import MainLayout from "../components/layouts/MainLayout"
import Heater from "../components/Heater"

export default function Home({resultado}) {
 console.log(resultado)
return (
  <MainLayout>
    <Heater />
    {/* console.log(data); */}
    {/* <div> 
      <h1>{resultado.id}</h1>
    </div> */}
 
  </MainLayout>
) 

  
  }

//recuerda descomentar
  // export async function getStaticProps(){
  //   const url= "https://pokeapi.co/api/v2/pokemon/ditto";
  //   const respuesta=await fetch(url);
  //   const resultado=await respuesta.json();
  //   console.log(resultado);
  //   return{
  //     props:{
  //       resultado

  //     }
  //   }
  // }

  
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


