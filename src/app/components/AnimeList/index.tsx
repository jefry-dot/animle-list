import Image from "next/image";

export const AnimeList = () => {
    return (
        <div className="grid grid-cols-3 gap-4  gap-4 h-32">
            <div className="bg-red-500"><Image src="https://placehold.co/600x400/png" 
            alt="image" width={600} height={600}/>
            <h3>Judul Anime </h3>
            </div>
            <div className="bg-red-500">Kotak 2</div>
            <div className="bg-red-500">Kotak 3</div>
            <div className="bg-red-500">Kotak 4</div>
            <div className="bg-red-500">Kotak 5</div>
            <div className="bg-red-500">Kotak 6</div>
        </div>
    );
};

export default AnimeList;