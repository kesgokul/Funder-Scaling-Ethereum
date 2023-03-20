export default function SignInButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" px-8 py-2 uppercase bg-white text-gray-900 rounded-sm hover:bg-slate-50"
    >
      Sign-in
    </button>
  );
}
