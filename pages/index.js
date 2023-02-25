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

export default function Example() {
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