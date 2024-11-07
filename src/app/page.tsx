import Header from "./components/AnimeList/Header";
import AnimeList from "./components/AnimeList";
import Link from "next/link";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

  return (
    // paling populer
    <>
    <section>
      <Header title="Paling Populer" linkHref="/popular" linkTitle="Lihat Semua" />
      <AnimeList api={topAnime} />
    </section>

   
    </>
    
  );
};

export default Page;
