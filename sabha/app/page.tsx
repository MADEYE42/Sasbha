"use client";
import useUser from "@/hooks/user";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const { fullName, setfullName } = useUser();
  const [roomId, setroomId] = useState("");
  const router = useRouter();
  useEffect(() => {
    setfullName("");
  }, []);
  return (
    <div className="w-full h-screen">
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 flex flex-col h-screen items-center gap-24">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
          <div className="mx-auto max-w-4xl text-center ">
            <h1 className="bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent text-5xl font-bold">
              Personalized meets for us
            </h1>
            <h1 className="bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent text-5xl font-bold">
              and our friends.
            </h1>
            <p className="mx-auto mt-6 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nisi possimus odit delectus tenetur fuga amet perspiciatis ut
              accusamus molestias?
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 ">
              <input
                type="text"
                id="name"
                
                onChange={(e)=>setfullName(e.target.value.toString())}
                className="border rounded-md focus:outline-none focus:border-transparent w-full h-10 text-center cursor-pointer"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
