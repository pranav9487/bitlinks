import Link from "next/link";
import React from "react";
import AnimatedContent from "../app/AnimatedContent";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex px-3 text-white items-center justify-between ">
      <div className="logo font-bold text-lg">
        <Link href="/">Bitlinks</Link>
      </div>
      <ul className="flex gap-4 mx-10 ">
        <Link href="/">
          <li className="hover:font-bold">home</li>
        </Link>
        <Link href="/">
          <li className="hover:font-bold">about</li>
        </Link>
        <Link href="/shorten">
          <li className="hover:font-bold">shorten</li>
        </Link>
        <Link href="/">
          <li className="hover:font-bold">contact</li>
        </Link>
        <li className="flex gap-3">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={true}
            duration={0.8}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.0}
          >
            
              <Link
                href="/shorten"
                className="bg-purple-600 px-3 py-1 font-bold shadow-lg rounded-lg"
              >
                try now
              </Link>
           
          </AnimatedContent>
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={true}
            duration={0.8}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.0}
          >
            
              <Link
            href="/github"
            className="bg-purple-600 px-3 py-1 font-bold shadow-lg rounded-lg"
          >
            github
          </Link>
           
          </AnimatedContent>

          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
