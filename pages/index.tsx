import Head from "next/head";
import { Inter } from "next/font/google";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>WeatherUp</title>
      </Head>
      <main className="mt-5 mx-5">
        <h1 className="uppercase text-xl font-medium mb-4">Weather Up</h1>
        <form action="">
          <h2 className="mb-4 text-lg">Search for Weather Update</h2>
          <div className="mb-4">
            <SearchBox/>
          </div>
        </form>
      </main>
    </>
  );
}
