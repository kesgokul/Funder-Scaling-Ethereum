"use client";
import Image from "next/image";
import Link from "next/link";
import fakeProfile from "../../public/images/hape.png";
import { useAuth, useIsAuthenticated } from "@polybase/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Profile({ state, onSignOut }) {
  const [dropDown, setDropDown] = useState(false);
  const { auth } = useAuth();

  async function handleSignOut() {
    console.log("singout");
    await onSignOut();
  }
  return (
    <motion.main
      layout
      transition={{
        layout: {
          duration: 0.25,
          ease: "easeInOut",
          type: "spring",
        },
      }}
      className=" px-6 py-2 flex flex-col  bg-white border-2 border-orange-600 rounded-md absolute right-20 z-20"
    >
      <button
        onClick={() => setDropDown((s) => !s)}
        className="flex items-center bg-transparent text-gray-900 "
      >
        <figure>
          <Image
            src={state.profile || fakeProfile}
            alt="profile picture"
            height={40}
            width={40}
            style={{ borderRadius: "100%" }}
          />
        </figure>
        <p className="px-2 bg-white">
          {" "}
          {state.userId.slice(0, 6) + "..." + state.userId.slice(-4)}
        </p>
      </button>
      {dropDown && (
        <div className="mt-2  bg-white w-full rounded-md">
          <ul className="w-full flex flex-col gap-2">
            <li className="border-t pt-2 border-gray-300">
              <Link className="text-gray-900" href="/my-profile">
                Profile
              </Link>
            </li>
            <li className="border-t pt-2 border-gray-300">
              <Link className="text-gray-900" href="/my-contributions">
                My Contributions
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleSignOut}
                className="mt-4 py-2 w-full bg-black uppercase text-orange-500 cursor-pointer"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </motion.main>
  );
}
