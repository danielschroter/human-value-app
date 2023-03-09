import React from "react";
import { useState } from "react";

export default function Hero() {
  const [bio, setBio] = useState("");
  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-900">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 w-64 h-64 bg-indigo-300 rounded-full -left-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        <div className="absolute top-0 rounded-full w-72 h-72 bg-sky-300 -right-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full w-72 h-72 bg-emerald-300 -bottom-8 left-20 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <div className="flex flex-auto flex-col justify-center p-10">
            {/* <h2 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                  Human Value Detector
                </h2> */}
            <h2 className="font-extrabold text-5xl text-white ">
              Human Value Detector
            </h2>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="w-full text-gray-400 rounded-md p-2 shadow-lg border border-slate-800 bg-gray-600/40 focus:border-none backdrop-blur-xl my-5"
              placeholder={
                "We should abandon whaling because it is a species at risk of distinction"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
