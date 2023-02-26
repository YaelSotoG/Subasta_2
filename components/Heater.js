// import Image from 'next/image'




export default function Heater(){
    return (
        <div className="z-40 ">
          
        <div className="flex flex-col justify-center items-center w-full h-[800px]">
            <img src="/images/image-header.jpeg" layout='responsive' object-Fit='contain'></img>
            <div className='absolute bg-white flex flex-col justify-center items-center w-96 h-40 border-[#8f250c] border-double border-8 text-[#8f250c] text-4xl'>
                <h1>NFeetTies</h1>
                <hr className='border-[1px] border-[#8f250c] border-solid w-72'/>
                <h2>Subastas</h2>
            </div>
        </div>
        </div>
    );
}