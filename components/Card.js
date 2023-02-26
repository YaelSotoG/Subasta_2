
import React from "react";
import { useState, useRef, useEffect } from "react";



/* eslint-disable @next/next/no-img-element*/ 
export default function Card(){



    


    const [timer, setTimer] = useState('00:10:00');
    const [precioo, setPrecioo] = useState (0);
    const [precioa, setPrecioa] = useState (1);
    const [preciob, setPreciob] = useState (2);
    const [precioc, setPrecioc] = useState (1000);
    const [stateboton,setStateboton]=useState(false);
    const [stateoferta,setStateoferta]=useState(true);

    
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
   
   function trns() {
    const web3 =  require("@solana/web3.js");
    ( async () => {
    
    console.log(web3.clusterApiUrl('devnet'))
    const connection = new web3.Connection(
      web3.clusterApiUrl('devnet'),
      'confirmed',
    );

    console.log(await connection.getEpochInfo())
  
    const from = web3.Keypair.generate();
    
    const fromAirDropSignature = await connection.requestAirdrop(from.publicKey, 2 * web3.LAMPORTS_PER_SOL)
    await connection.confirmTransaction(fromAirDropSignature);
  
  
    
    const to = web3.Keypair.generate();


  
    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to.publicKey,
        lamports: 1000000,
      }),
    );

    
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [from],
    );
    console.log('SIGNATURE', signature);
    })();

     
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
                        <button href="#" class="btn" onClick={trns} disabled={stateoferta}>HACER OFERTA</button>
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
                        <button href="#" class="btn" disabled={stateoferta}>HACER OFERTA</button>
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
                        <button href="#" class="btn" disabled={stateoferta}>HACER OFERTA</button>
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