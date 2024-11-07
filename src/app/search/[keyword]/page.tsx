
import Header from "@/app/components/AnimeList/Header";
import AnimeList from "@/app/components/AnimeList";

const Page = async ({ params }: { params: { keyword: { keyword: string } } }) => {
    const { keyword } = params;
    const decodedKeyword = decodeURI(keyword);
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
     const searchAnime = await response.json();

  return (
    // paling populer
    <>
    <section>
    <Header title={`Hasil Pencarian: ${decodedKeyword}`} linkHref="" linkTitle="" />
      <AnimeList api={searchAnime} />
    </section>
    </>
    
  );
};

export default Page;
