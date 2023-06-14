"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import { FaAward } from "react-icons/fa";

export default function Hero() {
  const [bio, setBio] = useState(
    "We should abandon whaling because it is a species at risk of distinction"
  );
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
    <div className="flex h-full min-h-screen flex-col items-center justify-center text-slate-100 ">
      <div className="relative w-full max-w-2xl">
        {/* <div className="absolute top-0 w-64 h-64 bg-indigo-400 rounded-full -left-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        <div className="absolute top-0 rounded-full w-72 h-72 bg-pink-300 -right-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full w-72 h-72 bg-emerald-300 -bottom-8 left-20 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-4000"></div> */}
        <div className="m-8 relative space-y-4">
          <div className="flex flex-auto flex-col justify-center p-10">
            {/* <h2 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                  Human Value Detector
                </h2> */}
            <h2 className="text-5xl  tracking-widest leading-snug">
              Human Value Detector <FaAward className="inline" />
            </h2>
            <p className="mt-8 leading-6 max-w-xl">
              Competition winning system discovering human values in arguments.
              We presented our system at the <b>ACL 2023</b> conference and
              published a system description paper in their proceedings.
            </p>
            <div className="flex flex-row gap-6 mt-8 text-sm">
              <a
                href="/HumVal_paper.pdf"
                download
                className="bg-gray-700/30 backdrop-blur-md border-1 border-emerald-500/30 rounded-md border-2 px-4 py-2"
              >
                Paper
              </a>
              {/* <Link
                href="#"
                className="border border-emerald-600 rounded-md border-2 px-4 py-2"
              >
                Master Thesis
              </Link> */}
              <Link
                href="https://touche.webis.de/semeval23/touche23-web/index.html"
                target="_blank"
                className="bg-gray-700/30 backdrop-blur-md border-1 border-pink-500/30 rounded-md border-2 px-4 py-2"
              >
                Competition
              </Link>
              <Link
                href="https://github.com/danielschroter/human_value_detector"
                target="_blank"
                className="bg-gray-700/30 backdrop-blur-md border-1 border-slate-500/10 rounded-md border-2 px-4 py-2"
              >
                Code
              </Link>
            </div>
            <div className="text-2xl tracking-widest mt-10">Try it out:</div>
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
