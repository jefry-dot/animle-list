import Header from "./components/AnimeList/Header";
import AnimeList from "./components/AnimeList";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

  return (
    // paling populer
    <>
    <section>
      <Header title="Paling Populer" linkHref="/top/anime" linkTitle="Lihat Semua" />
      <AnimeList api={topAnime} />
    </section>

    <section>
      <Header title="Paling Baru" linkHref="/top/new" linkTitle="Lihat Semua" />
      <AnimeList api={topAnime} />
    </section>
    </>
    
  );
};

export default Home;
