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
    console.log("se llamo");
  }
  return (
    <div>

    <button onClick={llamarWallet}><h1>Wallet</h1></button>
      </div>
  );
}
