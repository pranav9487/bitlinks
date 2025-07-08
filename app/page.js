import Image from "next/image";
import localFont from "next/font/local";  


 export const myFont = localFont({
  src: './fonts/Poppins-ExtraBold.ttf',
});


export default function Home() {
  return (

<main className="">
  {/* <div className="fixed inset-0 h-screen w-full bg-slate-950">
    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
  </div> */}
      <section className="grid grid-cols-2 h-[50vh] m-2 rounded-md shadow-md bg-purple-50">
        <div className=" flex flex-col justify-center my-auto items-end gap-4 h-[50vh] m-1 rounded-2xl shadow-lg">
         <div className="m-2 mix-blend-darken"> 
          <h1 className="text-4xl font-bold text-purple-700">
            Welcome to Bitlinks
          </h1>
          <p className= {` text-lg text-purple-600 mt-4 ${myFont.className} `}>
            Shorten your links easily and efficiently.
          </p>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src="/teams.jpg"
            alt="peopele working together"
           
  
            fill={true}
            className="mix-blend-darken    "
          />
        </div>
      </section>
    </main>
  );
}
