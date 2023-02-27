
import React from "react";
import { useState, useRef, useEffect } from "react";
const web3 =require("@solana/web3.js");
const bs58 = require('bs58');


/* eslint-disable @next/next/no-img-element*/ 
export default function Card(){



    


    const [timer, setTimer] = useState('00:10:00');
    const [precioo, setPrecioo] = useState (0);
    const [precioa, setPrecioa] = useState (1);
    const [preciob, setPreciob] = useState (2);
    const [precioc, setPrecioc] = useState (1000);
    const [stateboton,setStateboton]=useState(false);
    const [stateoferta,setStateoferta]=useState(true);

    const minta=new web3.PublicKey("HE9YJu1yE7VquBnzJktXcYGbAW46oLKBJK4mqMPTz82x"); //Token de NFT
    const mintb=new web3.PublicKey("3GvQ3zoHPcWwWjmoMvErn7habwMwHRWV86HEZ136LES8"); //Token de NFT
    const mintc=new web3.PublicKey("HX3Mj3vSwCLN216HUCYfktfEFZg35ALMAYHB71pgLcja"); //Token de NFT

    
    const Ref = useRef(null);
  
  
    
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        else{
            setStateboton(true);
            setStateoferta(false);
        }
    }
  
  
    const clearTimer = (e) => {
  
        
        setTimer('00:00:00');
  
        
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 240);
        return deadline;
    }
  
    
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
   
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }






    
   
   
    let valorpuja;
    const puja=(event)=>{
         setPrecioo(event.target.value);   
    }
    function enviara(){
        setPrecioa(precioo);
    }
    function enviarb(){
        setPreciob(precioo);

    }
    function enviarc(){
        setPrecioc(precioo);

    }

    function transaccion(precio){
    (async () => {
          // Connect to cluster
          console.log(web3.clusterApiUrl('devnet'))
          const rpcURL ="https://cold-multi-paper.solana-devnet.quiknode.pro/"; //Descomentar esta  en caso de que el servidor no jale
          const connection = new web3.Connection(
          rpcURL, //Descomentar esta  en caso de que el servidor no jale
          //web3.clusterApiUrl('devnet'),//Comentar esta en caso de que el servidor no jale
          'confirmed',
          );
        
          //Quien envía la transacción, la string de la secretKey se obtiene del log in
          const secKey="4Tadih4K5Subg3MMayn2bhWAKSw8UKFY1wzQQxyYuqUBttCov5a1b6u9KSMXGCQX3hnSuE3qX54njsBYgtBVDMv9";
          let from = web3.Keypair.fromSecretKey(bs58.decode(secKey));
          //let from=new web3.PublicKey(pubKey);
          //const from=pubKey;
          const airdropSignature = await connection.requestAirdrop(from.publicKey, 0 * web3.LAMPORTS_PER_SOL,)
          await connection.confirmTransaction(airdropSignature);
      
          //Quien recibe la transaccion
          //const to=new web3.PublicKey("Fo6qUPkaKR9gCutu1nSf4rFd44n3LpYznvyWoXCkjzC3");// la de nosotros es fija
          const toKey="2xs1oaV4ASFXFcFNkJmAaiVtVhv25c9axT6wAdbCVtcfGmnpCMtGy7A38BGC7tJneaogYxQfEKZm8extG8vRrW3M";
          let to = web3.Keypair.fromSecretKey(bs58.decode(toKey));
          // Add transfer instruction to transaction
          const transaction = new web3.Transaction().add(
            web3.SystemProgram.transfer({
              fromPubkey:  from.publicKey,
              toPubkey: to.publicKey,
              lamports: precio*1000000000, //multiplicar por la variable que aumenta en la subasta
            }),
          );
      
          // Sign transaction, broadcast, and confirm
          const signature = await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [from],
          );
          console.log('SIGNATURE', signature);
          console.log('se recibió transacción de', from.publicKey.toString());
        //Transferencia de NFT
        let tx = new web3.Transaction();
        /*tx.add(
            web3.createTransferCheckedInstruction(
            to, // from
            token, // mint
            from, // to
            to.publicKey, // from's owner
            1, // amount
            0 // decimals
            )
        );  */
        //console.log("se envió el NFT");  
        //const sign = await sendAndConfirmTransaction(connection,tx,[to]);
        })();
      }
    function trnsa(){
        //setPrecioa(precioo);
        console.log(precioa);
        transaccion(precioa);
    }
    function trnsb(){
        //setPreciob(precioo);
        console.log(preciob);
        transaccion(preciob);
    }

    function trnsc(){
        //setPrecioc(precioo);
        console.log(precioc);
        transaccion(precioc);
    }
    return(
        <>
        <div className="flex justify-center">
        <hr className='border-[3px] border-[#8f250c] border-solid w-11/12'/>

        </div>
        <div className=" grid md:grid-cols-2 gric-cols-1 relative  z-40 h-fit">
                
            {/* <div></div> */}
            <div className=" relative w-[300px] h-[380px] group mx-[250px] my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/air_force.jpg"></img>
                    <h6>SOL {precioa}</h6>
                    <h6 className=" flex justify-center bottom-10 left-10 text-2xl text-black">AIR FORCE 1</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Off White x Nike Air Force 1</p>
                    
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">{timer}
                                    </p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 776354</li>
                        </ul>
                        <div className="flex flex-col items-center">
                            
                            <input type="number" id="precioaa" name="precioaa"  onChange={puja}></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" onClick={enviara} disabled={stateboton}> Puja</button>
                            
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <button href="#" class="btn" onClick={trnsa} disabled={stateoferta}>HACER OFERTA</button>
                    </div>
                </div>
            </div>


            {/* imagen 2 */}

    <div className="relative  w-[300px] h-[380px] group mx-24 my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/nike_coyote.jpg"></img>
                    <h6>SOL {preciob}</h6>
                    <h6 className="flex justify-center bottom-10 left-10 text-2xl text-black">LeBron 18 Low</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">LeBron 18 Low 'El Coyote x Correcaminos'</p>
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">{timer}
                                </p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 5668931</li>
                        </ul>
                        <div className="flex flex-col items-center">
                        <input type="number" id="precioaa" name="preciob" onChange={puja}></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" onClick={enviarb} disabled={stateboton}> Puja</button>
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <button href="#" class="btn" onClick={trnsb} disabled={stateoferta}>HACER OFERTA</button>
                    </div>
                </div>
            </div>


{/* imagen 3 */}
            <div className="relative  w-[300px] h-[380px] group mx-[250px] my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/pastenis.jpg"></img>
                    <h6>SOL {precioc}</h6>
                    <h6 className="flex justify-center bottom-10 left-10 text-2xl text-black">MEATBALLZIES</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Meatballzies x Tony Hawk</p>
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">{timer}
                                </p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 3457523</li>
                            <li>Deliciosos</li>
                        </ul>
                        <div className="flex flex-col items-center">
                        <input type="number" id="precioc" name="precioc" onChange={puja}></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" onClick={enviarc} disabled={stateboton}> Puja</button>
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <button href="#" class="btn" onClick={trnsc} disabled={stateoferta}>HACER OFERTA</button>
                    </div>
                </div>
            </div>
            {/* // imagen 4 */}
            <div className=" relative w-[300px] h-[380px] group mx-24 my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/air_force.jpg"></img>
                    <h6>SOL {precioa}</h6>
                    <h6 className="flex justify-center  bottom-10 left-10 text-2xl text-black">AIR FORCE 1</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Off White x Nike Air Force 1</p>
                    
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">{timer}
                                    </p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 776354</li>
                        </ul>
                        <div className="flex flex-col items-center">
                            
                            <input type="number" id="precioaa" name="precioaa"  ></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" disabled={stateboton} > Puja</button>
                            
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <button href="#" class="btn" disabled={stateoferta}>HACER OFERTA</button>
                    </div>
                </div>
            </div>

        </div>

        </>
        
        
    )
    
}