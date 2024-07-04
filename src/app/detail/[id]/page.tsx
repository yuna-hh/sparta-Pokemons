import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function detailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3000/api/pokemons/${id}`);
  const pokemon: Pokemon = await response.json();

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-[700px] rounded-[15px] text-black">
        <div className="flex flex-col justify-center items-center bg-gray-200 py-[20px] rounded-t-[15px]">
          <span className="font-bold text-[25px] mb-[5px]">
            {pokemon.korean_name}
          </span>
          <span className="text-[18px]">
            No. {String(pokemon.id).padStart(4, "0")}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center pt-[15px] pb-[40px] bg-white rounded-b-[15px]">
          <Image
            src={pokemon.sprites.front_default}
            width={150}
            height={150}
            alt={pokemon.korean_name}
            priority={true}
          />
          <div className="text-center">
            <span className="block text-[20px] mb-[5px]">
              이름: {pokemon.korean_name}
            </span>
            <span>키: </span>
            <span className="mr-[8px]">{pokemon.height / 10}m</span>
            <span>무게: </span>
            <span>{pokemon.weight / 10}kg</span>

            <div className="flex flex-row justify-center items-center gap-[10px] my-[12px]">
              <div className="flex flex-row">
                <span className="font-bold">타입: </span>
                <div className="flex gap-[8px] ml-[5px]">
                  {pokemon.types.map((type) => (
                    <span
                      className="px-[6px] bg-orange-500 rounded-[3px] text-white"
                      key={type.type.name}
                    >
                      {type.type.korean_name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row">
                <span className="font-bold">특성: </span>
                <div className="flex gap-[8px] ml-[5px]">
                  {pokemon.abilities.map((ability) => (
                    <span className="px-[6px] bg-lime-500 rounded-[3px] text-white">
                      {ability.ability.korean_name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="font-bold text-[22px]">[ 기 술 ]</span>
            <ul className="grid grid-cols-5 gap-[5px] mt-[10px]">
              {pokemon.moves.map((move) => (
                <li
                  className="py-[3px] px-[6px] bg-gray-100 rounded-[3px] tracking-[1px]"
                  key={move.move.name}
                >
                  {move.move.korean_name}
                </li>
              ))}
            </ul>
          </div>
          <Link href={`/`}>
            <div className="mt-[30px] py-[10px] px-[15px] bg-blue-500 rounded-[5px] text-white tracking-[2px]">
              뒤로가기
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default detailPage;

// const getPokemonDetail = async () => {
//   // const response = await fetch("http://localhost:3000/api/pokemons");
//   const response = await fetch(`http://localhost:3000/api/pokemons/${id}`);
//   // client 컴포넌트여서 어떤 경로인지 알고있음
//   // next api 호출방법
//   // return response.json();
//   const data = await response.json();
//   return data;
// };
