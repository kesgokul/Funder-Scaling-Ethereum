import Logo from "./Logo";
import SignInButton from "./buttons/SignInButton";
import InfoButton from "./buttons/InfoButton";

export default function Header() {
  return (
    <main className="px-2 py-4 lg:p-8 flex items-center gap-4 bg-transparent">
      <Logo />
      <InfoButton styles="ml-auto" />
      <SignInButton />
    </main>
  );
}
