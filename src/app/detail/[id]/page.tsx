import React from "react";

async function detailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3000/api/pokemons/${id}`);
  const data = await response.json();

  return <div>{data.id}</div>;
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
