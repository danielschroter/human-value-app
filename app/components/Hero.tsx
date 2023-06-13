"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";

export default function Hero() {
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<string[]>([]);

  const getValues = async () => {
    setIsLoading(true);
    const res = await fetch(`https://values.args.me/api/?argument=${bio}`);
    setIsLoading(false);
    return res.json();
  };

  const handleClick = () => {
    refetch();
  };

  const { data, refetch } = useQuery(["valueData"], getValues, {
    enabled: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log("This is Data", data);
      let l = [];
      for (let k in data) {
        if (data[k] != "0") {
          l.push(k);
        }
      }
      setValues(l);
    },
  });

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center ">
      <div className="relative w-full max-w-lg">
        {/* <div className="absolute top-0 w-64 h-64 bg-indigo-400 rounded-full -left-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        <div className="absolute top-0 rounded-full w-72 h-72 bg-pink-300 -right-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full w-72 h-72 bg-emerald-300 -bottom-8 left-20 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-4000"></div> */}
        <div className="m-8 relative space-y-4">
          <div className="flex flex-auto flex-col justify-center p-10">
            {/* <h2 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                  Human Value Detector
                </h2> */}
            <h2 className="text-5xl text-slate-100 tracking-widest leading-snug">
              Human Value Detector
            </h2>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              // rows={4}
              className="w-full text-gray-200 placeholder:text-gray-400 rounded-md p-2 shadow-lg border outline-none border-slate-800 bg-gray-600/20 backdrop-blur-xl my-5 focus:bg-gray-600/10"
              placeholder={
                "We should abandon whaling because it is a species at risk of distinction"
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleClick();
                }
              }}
            />
            {isLoading ? (
              <div className="relative">
                <div className="w-5 h-5 border-purple-200 border-2 rounded-full"></div>
                <div className="w-5 h-5 border-pink-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-6">
                {values.map((v) => (
                  <div
                    className="text-sm text-gray-300 bg-slate-700/50 px-4 py-2 rounded-3xl shadow-md border border-pink-600 hover:bg-pink-600"
                    key={v}
                  >
                    {v}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* <a
              href="#"
              className="w-full p-2 rounded-full text-center border border-2 border-pink-600 text-slate-100"
            >
              {" "}
              analyze{" "}
            </a> */}
        </div>
      </div>
    </div>
  );
}
