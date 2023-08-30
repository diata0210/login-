import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Router, useRouter } from "next/router";
import React from "react";

type Props = {
  post: any;
};

export default function PostDetailPage({post}: Props) {
  if(!post){
    return null;
  }
  return (
    <div>
      <div>PostDetailPage</div>
      <div>{post.title}</div>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();
  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  console.log("Get Static props: ", context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) {
    return { notFound: true };
  }
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
