"use client";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <li className="flex flex-col items-center border border-current rounded-[8px] p-[15px]">
      <Link href={`/detail/${pokemon.id}`}>
        <Image
          src={pokemon.sprites.front_default}
          width={100}
          height={100}
          alt={pokemon.korean_name}
          priority={true}
        />
        <div className="flex flex-col items-center mb-[8px]">
          <span className="font-bold">{pokemon.korean_name}</span>
          <span>{pokemon.id}</span>
        </div>
      </Link>
    </li>
  );
};

export default PokemonCard;
