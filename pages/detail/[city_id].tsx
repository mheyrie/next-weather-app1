import Head from "next/head";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import CityData from "@/interfaces/city";
import WeatherData from "@/interfaces/weather";
import cities from "@/lib/city.list.json";
import Image from "next/image";

// Type cast cities to CityData[]
const Cities = cities as CityData[];

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { city_id } = context.query;

  // Find the city by city id
  const city = Cities.find((city) => city.id.toString() === city_id);
  if (!city) {
    return {
      notFound: true,
    };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  try {
    // Fetch weather data
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const weatherData: WeatherData = await res.json();

    return {
      props: {
        city,
        weather: weatherData,
      },
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      notFound: true,
    };
  }
}

type Props = {
  city: CityData;
  weather: WeatherData;
};

export default function CityWeather({ city, weather }: Props) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <>
      <Head>
        <title>Weather in {city.name}</title>
      </Head>
      <main className="mt-5 mx-5">
        <h1 className="text-xl font-medium mb-4">Weather Check</h1>
        <Link href="/">&larr; Home</Link>
        <div className="py-5 gap-6 w-fit">
          <div className="bg-gray-400 rounded-md">
            <div className="grid grid-cols-2">
              <div>
                <h2 className="text-2xl mb-4 text-black">
                  {city.name} ({city.country})
                </h2>
                <span className="font-medium text-lg text-gray-700">
                  {weather.main.temp_min.toFixed(0)}&deg;C -{" "}
                </span>

                <span className="text-sky-700 text-sm">
                  {weather.main.temp_max.toFixed(0)}&deg;C
                </span>
              </div>
              <div className="justify-between">
                <Image
                  src={iconUrl}
                  width={50}
                  height={50}
                  alt="Weather Icon"
                />
                <div className="text-white text-sm ">
                  <div>{weather.weather[0].description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
