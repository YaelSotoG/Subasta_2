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
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-500">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 sm:items-center">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-4xl  font-bold tracking-tight text-white sm:text-4xl">
              Nuestros mentores
            </h2>
            <p className="text-xl text-gray-100">
              Si necesitas, pide ayuda a cualquiera de nuestros mentores, son
              bonitas personas y comen muchos dulces 🤓
            </p>
          </div>
          <div className="place-items-center space-y-4">
            <img src="/mentors/tarjeta-andy.png"></img>
            <img src="/mentors/tarjeta-bart.png"></img>
            <img src="/mentors/tarjeta-cesar.png"></img>
            <img src="/mentors/tarjeta-meny.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
