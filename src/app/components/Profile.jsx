"use client";
import Image from "next/image";
import fakeProfile from "../../../public/images/hape.png";
import { useAuth, useIsAuthenticated } from "@polybase/react";

export default function Profile({ state }) {
  //   const { state } = useAuth();
  return (
    <main className="flex">
      <button className="px-8 py-2 bg-white text-gray-900 rounded-md">
        {state && state.userId.slice(0, 10)}
      </button>
      <figure className=" w-10 h-10 rounded-full">
        <Image
          src={state.profile || fakeProfile}
          alt="profile picture"
          height={40}
          width={40}
        />
      </figure>
    </main>
  );
}
