"use client";
import useUser from "@/hooks/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const { fullName, setfullName } = useUser();
  const [roomId, setroomId] = useState("");
  const router = useRouter();

  useEffect(() => {
    setfullName("");
  }, []);

  return (
    <div>
      <div className="w-full h-screen font-[Poppins] bg-white text-black">
        <section className="flex flex-col items-center justify-center h-screen">
          <div className="mx-auto max-w-screen-xl px-4 py-32 flex flex-col items-center gap-24">
            <Image src="/code.png" alt="logo" width={200} height={200} />

            <div className="mx-auto max-w-4xl text-center">
              {/* Name Input */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setfullName(e.target.value.toString())}
                  className="border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:border-transparent w-full h-10 text-center cursor-pointer"
                  placeholder="Enter your name"
                />
              </div>

              {/* Room ID and Join/Create Section */}
              {fullName && fullName.length >= 3 && (
                <>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <input
                      type="text"
                      id="room-id"
                      value={roomId}
                      onChange={(e) => setroomId(e.target.value)}
                      className="border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:border-transparent w-full h-10 text-center cursor-pointer"
                      placeholder="Enter room Id to join a meeting"
                    />
                    <button
                      className="rounded-md bg-blue-600 px-10 py-[11px] text-sm font-medium hover:bg-blue-800 duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed"
                      onClick={() => router.push(`/room/${roomId}`)}
                      disabled={!roomId}
                    >
                      Join
                    </button>
                  </div>

                  {/* Create New Meeting Section */}
                  <div className="mt-4 flex items-center justify-center">
                    <button
                      className="text-lg font-medium hover:text-blue-400 hover:text-xl duration-300"
                      onClick={() => router.push(`/room/${uuid()}`)}
                    >
                      Or create a new meeting
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}
