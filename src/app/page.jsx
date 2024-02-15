"use client"
import { useEffect } from "react";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
          const response = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_API_KEY}`)
          const data = await response.json();
          router.push(`/${data.city}`)
      } catch (error) {
        console.error(error);
      }
    })();
  }, [router]);
  return (
    <div className="container max-w-7xl box-border min-h-dvh p-4">
      <Loader />
    </div>
  );
};

export default Home;
