import React from "react";
import useSWR from "swr";
type Props = {
  studentId: string;
};

export default function StudentDetail({ studentId }: Props) {
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    `students/${studentId}`,
    {
      revalidateOnFocus : false
    }
  );
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  function handleMutateClick(){
    mutate({age:20}, false)
  }
  console.log(data);
  return (
    <>
      <div>StudentDetail</div>
      <h1>Name : {data.age}</h1>
      <button onClick={handleMutateClick}>mutate</button>
    </>
  );
}
