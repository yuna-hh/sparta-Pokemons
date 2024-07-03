"use client";
import Image from "next/image";
import { Pokemon } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <li>
      <Image
        src={pokemon.sprites.front_default}
        width={100}
        height={100}
        alt={pokemon.korean_name}
      ></Image>
      <div>
        <span>{pokemon.korean_name}</span>
        <span>{pokemon.id}</span>
      </div>
    </li>
  );
};

export default PokemonCard;
