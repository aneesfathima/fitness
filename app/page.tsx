import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-teal-700 h-screen">
      <h1 className="font-bold text-amber-300 pt-35 pl-20 mb-4"> WORK SMARTER. ACHEVE MORE</h1>
      <h2 className="text-white font-bold text-3xl pl-20 leading-tight mb-4">Simple fitness experience for everyone.</h2>
      <p className="font-bold text-white pl-20">Track Your Workouts, get better results, and be the best</p>
      <p className="font-bold text-white pl-20 mb-4">Version of you. Less thinking, more lifting.</p>
      <button className="bg-amber-300 text-teal-700 font-bold py-2 px-4 rounded-full ml-20 hover:bg-white">Get Started - It's Free</button>
      <button className="bg-transparent border-2 border-amber-300 text-amber-300 font-bold py-2 px-4 rounded-full ml-4 hover:bg-red-400">Watch Video</button>
      <Image src="/gym1.png" alt="Gym Image" width={600} height={400} className="absolute right-0 top-30 animate-pulse"/>
      <Image src="/work.png" alt="Work Image" width={200} height={100} className="absolute left-40 top-100 rounded-lg shadow-lg"/>

    </div>
  );
}