

const web3 =  require("@solana/web3.js");
     




export default function CanvasTransform(){


   
  function trns() {
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

        
        <div className=" relative flex mt-40 z-40 h-[800px]">
            <div className="relative w-[300px] h-[380px] group mx-40">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/air_force.jpg"></img>
                    <h6 className="absolute bottom-10 left-10 text-2xl text-black">AIR FORCE 1</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Off White x Nike Air Force 1</p>
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">
                                <span id="days"></span>días/ 
                                <span id="hours"></span>horas/
                                <span id="minutes"></span>minutos/
                                <span id="seconds"></span>segundos
                                    </p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 776354</li>
                            <li>Edición coleccionista</li>
                            <li>Colaboración especial</li>
                            <li>Logotipo al frente</li>
                            <li>Caucho y gamuza</li>
                        </ul>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <a href="#" class="btn" onClick={trns}>HACER OFERTA</a>
                    </div>
                </div>
            </div>


            {/* imagen 2 */}

    <div className="relative  w-[300px] h-[380px] group mx-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/nike_coyote.jpg"></img>
                    <h6 className="absolute bottom-10 left-10 text-2xl text-black">LeBron 18 Low</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">LeBron 18 Low 'El Coyote x Correcaminos'</p>
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">
                                <span id="days"></span>días/ 
                                <span id="hours"></span>horas/
                                <span id="minutes"></span>minutos/
                                <span id="seconds"></span>segundos

                                </p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 5668931</li>
                            <li>Colaboración ed. limitada</li>
                            <li>Recomendado para casual</li>
                            <li>Logotipo al frente</li>
                            
                        </ul>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <a href="#" class="btn">HACER OFERTA</a>
                    </div>
                </div>
            </div>


{/* imagen 3 */}
            <div className="relative  w-[300px] h-[380px] group mx-40">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/pastenis.jpg"></img>
                    <h6 className="absolute bottom-10 left-10 text-2xl text-black">MEATBALLZIES</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Meatballzies x Tony Hawk</p>
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">
                                <span id="days"></span>días/ 
                                <span id="hours"></span>horas/
                                <span id="minutes"></span>minutos/
                                <span id="seconds"></span>segundos
                                </p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 3457523</li>
                            <li>Deliciosos</li>
                            <li>Patinaje casual y de calle</li>
                            <li>Mayor agarre</li>
                            <li>Puntos de estilo</li>
                        </ul>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <a href="#" class="btn">HACER OFERTA</a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}