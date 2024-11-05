import Link from "next/link";
import AnimeList from "./components/AnimeList";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

  return (
    <div>
    <div className="flex justify-between item-center p-4">
      <h1 className="text-2xl font-bold">Paling Populer</h1>
      <Link href="/popular" className="md:text-xl text:md underline hover:text-indigo-500 transition-all">
      Lihat Semua
      
      </Link>
      </div>
      
      <AnimeList api={topAnime} />
    </div>
  );
};

export default Home;
