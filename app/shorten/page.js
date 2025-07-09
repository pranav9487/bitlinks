"use client";

import { ToastContainer, toast, Bounce } from "react-toastify";
import Link from "next/link";
import React, { useState } from "react";
import { motion, buttonVariants } from "motion/react";
import "react-toastify/dist/ReactToastify.css";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setgenerated] = useState("");
  const generate = () => {
    if (!url || !shortUrl) {
      toast.error("fill the form correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        url: url,
        shortUrl: shortUrl,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
          seturl("");
          setShortUrl("");
          toast.success("url successfully generated", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      {/* <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}  />  */}
      <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          curve: "easeInOut",
          scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
        }}
        className="max-w-full overflow-hidden mx-auto"
      >
        <div className=" mx-auto flex flex-col justify-center items-center py-16 bg-purple-300 max-w-lg my-16 rounded-lg shadow-lg">
          <h1 className="font-extrabold text-2xl">Generate your URL</h1>
          <div className="flex flex-col gap-3 justify-center items-center my-10 ">
            <input
              type="text"
              value={url}
              placeholder="Enter the URL"
              onChange={(e) => {
                seturl(e.target.value);
              }}
              className=" p-2 focus:outline-purple-100 border-1 border-purple-200 bg-white rounded-lg  w-72"
            />
            <input
              type="text"
              placeholder="  Enter the Your Prefered URL text"
              value={shortUrl}
              onChange={(e) => {
                setShortUrl(e.target.value);
              }}
              className="p-2 focus:outline-purple-100 border-2 border-purple-200  w-72 bg-white rounded-lg "
            />
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-purple-600 px-3 py-1 font-bold shadow-lg rounded-lg w-full text-white"
              onClick={() => {
                generate();
              }}
            >
              Generate
            </motion.button>
          </div>
          {generated && (
            <div className="my-4 flex flex-col">
              <span className="text-2xl font-bold">Your Link: </span>
              <code>
                <Link
                  href={generated}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {generated}
                </Link>
              </code>
            </div>
          )}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default shorten;
