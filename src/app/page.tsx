import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const HomePage = async () => {
  const fswDonalds = await getRestaurantBySlug("fsw-donalds");
  if(!fswDonalds) {
    return notFound();
  }
  return (
    <div className="flex flex-col justify-center h-full items-center">
        <Link href="/fsw-donalds" className="border-2 p-8 rounded-full flex flex-col items-center gap-2 border-yellow-300">
          <Image
            src={fswDonalds.avatarImageUrl}
            alt={fswDonalds.name}
            width={82}
            height={82}/>
          <p className="font-semibold text-xl">FSW DONALDS</p>
        </Link>
    </div>
  );
}
 
export default HomePage;