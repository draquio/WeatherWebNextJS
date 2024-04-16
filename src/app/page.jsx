"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoaderSearching from "@/components/LoaderSearching";
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
    <div className="container max-w-7xl box-border min-h-dvh">
      <LoaderSearching />
    </div>
  );
};

export default Home;
