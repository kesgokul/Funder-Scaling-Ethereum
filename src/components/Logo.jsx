export default function Logo() {
  return (
    <main
      onClick={() => console.log("logo")}
      className="py-2 px-8 bg-green-500 rounded-md "
    >
      <h2 className="text-black uppercase tracking-widest">logo</h2>
    </main>
  );
}
