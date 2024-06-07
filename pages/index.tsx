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
      <main>
        <h1 className="uppercase">Weather Up</h1>
        <form action="">
          <h2>Search for Weather Update</h2>
          <SearchBox/>
        </form>
      </main>
    </>
  );
}
