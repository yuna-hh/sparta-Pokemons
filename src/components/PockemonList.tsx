"use client";

import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../types/pokemon";
import PokemonCard from "./PokemonCard";

const getPokemons = async () => {
  const response = await fetch("/api/pokemons");
  //client 컴포넌트여서 어떤 경로인지 알고있음
  // next api 호출방법
  // return response.json();
  const data: Pokemon[] = await response.json();
  return data;
};
// 나중에 분리도 가능! ts 파일로 만들기

function PockemonList() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Pokemon[]>({
    // data = [] 기본 값 지정
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
  console.log(data);

  return (
    <>
      <ul className="grid grid-cols-5 w-[90vw] my-[100px] mx-auto gap-[10px]">
        {data.map((pokemon) => {
          return <PokemonCard key={pokemon.korean_name} pokemon={pokemon} />;
        })}
      </ul>
    </>
  );
}

export default PockemonList;
