"use client";
import { Auth } from "@polybase/auth";
import { AuthProvider, PolybaseProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";

const polybase = new Polybase();
const auth = typeof window !== "undefined" ? new Auth() : null;

export default function Providers({ children }) {
  return (
    <PolybaseProvider polybase={polybase}>
      <AuthProvider auth={auth} polybase={polybase}>
        {children}
      </AuthProvider>
    </PolybaseProvider>
  );
}
