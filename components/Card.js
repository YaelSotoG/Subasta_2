import { useState } from "react";
import React from "react";

/* eslint-disable @next/next/no-img-element*/ 
export default function Card(){
    
    const [precioo, setPrecioo] = useState (1200);
    const [precioa, setPrecioa] = useState (1200);
    const [preciob, setPreciob] = useState (2000);
    const [precioc, setPrecioc] = useState (50000);

   
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
   
    
    // function enviarpuja(seleccion, valor){
    //     if(seleccion=='a'){
    //         setPrecioa(valor);
    //     }else{
    //         if(seleccion=='b'){
    //             setPreciob(valorpuja);
    //         }
    //             else{
    //                 setPrecioc(valorpuja);

    //             }
            
    //     }
    
    // }

   
    return(
        <div className=" grid md:grid-cols-2 gric-cols-1 relative  mt-40 z-40 h-fit">
            {/* <div></div> */}
            <div className=" relative w-[300px] h-[380px] group mx-[250px] my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/air_force.jpg"></img>
                    <h6>${precioa}</h6>
                    <h6 className=" flex justify-center bottom-10 left-10 text-2xl text-black">AIR FORCE 1</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Off White x Nike Air Force 1</p>
                    
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">Termina 28/02/2023</p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 776354</li>
                        </ul>
                        <div className="flex flex-col items-center">
                            
                            <input type="number" id="precioaa" name="precioaa"  onChange={puja}></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" onClick={enviara}> Puja</button>
                            
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <a href="#" class="btn">HACER OFERTA</a>
                    </div>
                </div>
            </div>


            {/* imagen 2 */}

    <div className="relative  w-[300px] h-[380px] group mx-24 my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/nike_coyote.jpg"></img>
                    <h6>${preciob}</h6>
                    <h6 className="flex justify-center bottom-10 left-10 text-2xl text-black">LeBron 18 Low</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">LeBron 18 Low 'El Coyote x Correcaminos'</p>
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">Termina 28/02/2023</p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 5668931</li>
                        </ul>
                        <div className="flex flex-col items-center">
                        <input type="number" id="precioaa" name="preciob" onChange={puja}></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" onClick={enviarb}> Puja</button>
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <a href="#" class="btn">HACER OFERTA</a>
                    </div>
                </div>
            </div>


{/* imagen 3 */}
            <div className="relative  w-[300px] h-[380px] group mx-[250px] my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/pastenis.jpg"></img>
                    <h6>${precioc}</h6>
                    <h6 className="flex justify-center bottom-10 left-10 text-2xl text-black">MEATBALLZIES</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Meatballzies x Tony Hawk</p>
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">Termina 28/02/2023</p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 3457523</li>
                            <li>Deliciosos</li>
                        </ul>
                        <div className="flex flex-col items-center">
                        <input type="number" id="precioc" name="precioc" onChange={puja}></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" onClick={enviarc}> Puja</button>
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <a href="#" class="btn">HACER OFERTA</a>
                    </div>
                </div>
            </div>
            {/* // imagen 4 */}
            <div className=" relative w-[300px] h-[380px] group mx-24 my-24">
                <div className="relative w-full h-full shadow-md bg-gradient-to-b from-black to-white bg-center bg-cover z-50 group">
                    <img src= "/images/air_force.jpg"></img>
                    <h6>${precioa}</h6>
                    <h6 className="flex justify-center  bottom-10 left-10 text-2xl text-black">AIR FORCE 1</h6>
                </div>
                <div className="absolute w-11/12 h-11/12 inset-0 m-auto p-[15px] z-40 bg-amber-300 shadow-lg group-hover:left-full duration-500">
                    <p class="text-center font-bold text-xl">Off White x Nike Air Force 1</p>
                    
                    <hr className='border-[1px] border-[#8f250c] border-solid'/>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p className="text-center ">Termina 28/02/2023</p>
                            </div>             
                        </div>
                    
                    <div className="mt-3.5">
                        <ul role="list" class="marker:text-stone-900 list-disc pl-5 space-y-3 text-stone-900">
                            <li>Modelo: 776354</li>
                        </ul>
                        <div className="flex flex-col items-center">
                            
                            <input type="number" id="precioaa" name="precioaa"  ></input>
                            <button className="w-[70px] h-[40px] bg-black text-white m-[20px]" > Puja</button>
                            
                        </div>
                    </div>

                    <div className="p-2.5 mt-2 font-bold text-white text-center bg-black">
                        <a href="#" class="btn">HACER OFERTA</a>
                    </div>
                </div>
            </div>

        </div>

      
        
        
    )
}