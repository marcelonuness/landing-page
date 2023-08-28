"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {

    const [divWidth, setDivWidth] = useState("auto")

    useEffect(() => {
        const handleScroll = () => {
            setDivWidth("")
        }
        
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return(
        <nav className="border fixed inset-x-0 top-0 p-8 text-[#063b27]">
            <ul className="flex items-center justify-between">
                <li>
                    <Image
                        src="/mercu-logo.png"
                        width={130}
                        height={0}
                        alt="logo-mercu"
                    ></Image>
                </li>
                <div className={`w-${divWidth} transition duration-300 ease-in flex bg-white/[0.4] border border-[#063b27] rounded-full p-5`}>
                    <li className="mx-10 text-xl">Product</li>
                    <li className="mx-10 text-xl">Resources</li>
                    <li className="mx-10 text-xl">Pricing</li>
                    <li className="mx-10 text-xl">What&apos;s New?</li>
                </div>
                <div>
                    <li>
                        <button className="bg-[#cfff92] border border-[#063b27] py-4 px-12 rounded-full text-xl">Book a Demo</button>
                    </li>
                </div>
            </ul>
        </nav>
    )
}