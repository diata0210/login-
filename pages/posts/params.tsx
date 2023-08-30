import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function ParamsPage({}: Props) {
  const { query } = useRouter();
  return (
    <div>
      <h1>ParamsPage</h1>
      <p>{JSON.stringify(query)}</p>
    </div>
  );
}
export async function getServerSideProps(){
    
    return {
        props: {}
    }
}