import Head from "next/head";
import Link from "next/link";

const WeatherPage = () => {
  return (
    <>
      <Head>
        <title>Next Weather API</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="container mx-auto text-center">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-700">&larr; Home</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default WeatherPage;
