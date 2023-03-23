"use client";
import Logo from "./Logo";
import SignInButton from "./buttons/SignInButton";
import InfoButton from "./buttons/InfoButton";
import Profile from "./Profile";
import { useAuth, useIsAuthenticated } from "@polybase/react";
import { useEffect } from "react";

export default function Header() {
  const { state, auth } = useAuth();
  const [isLoggedIn, loading] = useIsAuthenticated();
  async function handleSignOut() {
    await auth.signOut();
  }
  async function handleSignIn() {
    const authState = await auth.signIn();
  }

  useEffect(() => {
    handleSignOut();
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  //   console.log(loading);
  return (
    <main className="px-2 py-4 lg:p-8 flex items-center gap-4 bg-transparent">
      <Logo />
      <div className="ml-auto flex gap-4">
        <InfoButton styles="" />
        {!loading && !isLoggedIn && <SignInButton onClick={handleSignIn} />}
        {state && <Profile state={state} onSignOut={handleSignOut} />}
      </div>
    </main>
  );
}
