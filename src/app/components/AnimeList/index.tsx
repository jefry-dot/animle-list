import Image from "next/image";
import Link from "next/link";

export const AnimeList = ({ title, imageUrl, id }: { title: string; imageUrl: any; id: number }) => {
    return (
        
            <Link href={`/anime/${id}`} className="cursor-pointer">
                <Image  src={imageUrl} alt="..."  width={350} height={350}  
                className="w-full max=h-64 object-cover"/>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            </Link>
        
    );
};

export default AnimeList;
