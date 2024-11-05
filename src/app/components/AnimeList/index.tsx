import Image from "next/image";
import Link from "next/link";

export const AnimeList = ({ api }: { title: string; imageUrl: any; id: number; api: any }) => {
   {api.data.map((anime: any) => {
    <Link href={`/anime/${id}`} className="cursor-pointer">
    <Image  src={imageUrl} alt="..."  width={350} height={350}  
    className="w-full max=h-64 object-cover"/>
    <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
</Link>
   })}
    return (

        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
       
      </div>
            
        
    );
};

export default AnimeList;
