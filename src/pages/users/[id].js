"use client"

import { Inter } from "next/font/google";
import caller from '../../service'
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function User() {
    
    const [data, setData] = useState('');
    const getData = async () => {
        try {
            const { data } = await caller.get('/oauth/authorize',{params:{
              scope: "default",
              state:"state",
              response_type: "code",
              redirect_uri: "https%3A//www.googleapis.com/auth/userinfo.email https%3A//www.googleapis.com/auth/userinfo.profile",
              client_id: "950112704009-i6739o1mm0g4bhmg5s4epag71i51mqs6.apps.googleusercontent.com"
            }})
            setData(data)
        } catch (error) {
            console.log(error)
        }
    };
    
    useEffect(() => {
        getData()
    }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            { data }
      </div>

      
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
 
      </div>
    </main>
  );
}
