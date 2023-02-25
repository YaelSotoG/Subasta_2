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

export default function Navbar() {
  function llamarWallet(){
    console.log("se llamo");
  }
  return (
    <>
      <div className="flex justify-end items-center px-3 py-4 bg-gradient-to-b from-black to-white  fixed w-full h-32 ">
        <button className="bg-[#8f250c] h-16 rounded-full w-60" onClick={llamarWallet}>
            <h1 className="text-bold text-4xl text-white">Wallet</h1>
        </button>
      </div>
    </>
    
  );
}
