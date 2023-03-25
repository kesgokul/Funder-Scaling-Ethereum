"use client";
import Logo from "./Logo";
import SignInButton from "./buttons/SignInButton";
import InfoButton from "./buttons/InfoButton";
import Profile from "./Profile";
import { useAuth, useIsAuthenticated } from "@polybase/react";
import { useEffect } from "react";

export default function Header() {
  const { state, auth, loading: loadingState } = useAuth();
  const [isLoggedIn, loading] = useIsAuthenticated();
  async function handleSignOut() {
    await auth.signOut();
    console.log(state);
    console.log(isLoggedIn);
  }
  async function handleSignIn() {
    const authState = await auth.signIn();
    console.log(authState);
    console.log(state);
  }

  // useEffect(() => {
  //   handleSignOut();
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);

  //   console.log(loading);
  return (
    <main className="px-2 py-4 lg:p-8 flex items-center gap-4 bg-transparent absolute top-0 left-0 right-0">
      <Logo />
      <div className="ml-auto flex gap-4">
        <InfoButton styles="" />
        {!loading && !isLoggedIn && <SignInButton onClick={handleSignIn} />}
        {!loadingState && state && (
          <Profile state={state} onSignOut={handleSignOut} />
        )}
      </div>
    </main>
  );
}
