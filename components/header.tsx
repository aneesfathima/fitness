
import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-teal-500 p-4">
            <div className="flex flex-row">
            {/*Logo */}
            <Image src="/icon.jpg" alt="Fitness Pro Logo" width={40} height={40}/>
                <h1 className=" absolute font-bold text-xl text-white text-left ps-12">Fitness Pro</h1>
            </div>
            {/*Navigation Menu */}
            <nav>
                <ul className="relative flex gap-4 items-center justify-center text-white font-bold">
                    <li className="hover:text-orange-300"><a href="/">Home</a></li>
                    <li className="hover:text-orange-300"><a href="/features">Features</a></li>
                    <li className="hover:text-orange-300"><a href="/pricing">Pricing</a></li>
                    <li className="hover:text-orange-300"><a href="/testimonial">Testimonial</a></li>
                    <li className="hover:text-orange-300"><a href="/download">Download</a></li>
                </ul>
            </nav>
            {/*theme section*/} 
            <div>
                <Image src="/dark.png" alt="dark Mode" width={30} height={30} className="absolute right-11 -mt-7"/>
                <Image src="/light.jpg" alt="light Mode" width={30} height={30} className="absolute right-21 -mt-7"/>

            </div>
        </div>
    );
}