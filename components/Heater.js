// import Image from 'next/image'




export default function Heater(){
    return (
<header className="w-full grid grid-cols-2 h-[800px] bg-[#17002E] z-40 ">
    
        <div className="flex items-center justify-center w-full bg-blue-200">
            <h1 className="text-white text-7xl text-climate">NFeetTies</h1>
        </div>
        <div className="flex items-center justify-center w-full">
            <div className="rotate-45 w-3/4 h-2/4 bg-[#FFCB04]">
                <img src="/images/sneakers.png"></img>
            </div>
        </div>
</header>
        // <div className="z-40 ">
          
        // <div className="flex flex-col justify-center items-center w-full h-[800px]">
        //     <img src="/images/image-header.jpeg" layout='responsive' object-Fit='contain'></img>
        //     <div className='absolute bg-white flex flex-col justify-center items-center w-96 h-40 border-[#8f250c] border-double border-8 text-[#8f250c] text-4xl'>
        //         <h1>NFeetTies</h1>
        //         <hr className='border-[1px] border-[#8f250c] border-solid w-72'/>
        //         <h2>Subastas</h2>
        //     </div>
        // </div>
        // </div>
    );
}