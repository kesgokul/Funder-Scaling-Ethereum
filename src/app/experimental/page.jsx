"use client";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  async function handleIncrement() {
    await setCounter(counter + 1);
    console.log(`Count: ${counter}`);
  }

  return (
    <main className="w-screen h-screen grid items-center justify-center">
      <button onClick={handleIncrement}>Increment</button>
      <div>{`count: ${counter}`}</div>
    </main>
  );
}
