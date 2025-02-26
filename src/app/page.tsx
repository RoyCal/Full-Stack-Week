import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/fsw-donalds">
        <p className="font-semibold text-xl border-2 border-black rounded-full p-3">FSW Donalds</p>
      </Link>
    </div>
  );
}
 
export default HomePage;