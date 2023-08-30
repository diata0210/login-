import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface Props{
    posts: any[]
}

export default function PostPage({posts}: Props) {
  return (
    <ul>
        {posts.map(post => 
            <li key = {post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>)}
    </ul>
  )
}


export const getStaticProps: GetStaticProps<Props> = async(context: GetStaticPropsContext) => {
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();

    return {
        props: {
            posts: data.data.map((post:any) => ({id: post.id , title: post.title}))
        }
    }
}