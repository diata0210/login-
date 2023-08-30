import dynamic from 'next/dynamic';
import Header from '@/components/common/header';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {GetStaticProps, GetStaticPropsContext } from 'next';
import MainLayout from '@/components/layout/main';
import { Auth } from '@/components/common/auth';
import AdminLayout from '@/components/layout/admin';
interface Props {
    
}

// const Header = dynamic(() => import('@/components/common/header'), {ssr: false})
export default function About(props: Props){
    const [postList, setPostList] = useState([]);
    const {query} = useRouter();
    const router = useRouter();
    console.log(query);

    const page = Number(query.page) | 1
    useEffect(() => {
        if(!page){
            return;
        }
        ;(async () => {
            const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
            const data = await response.json();
            setPostList(data.data);
        })()
    },[page]);

    const handleClick = () => {
        router.push({
            pathname: '/about',
            query: {
                page: page + 1
            }
        }, undefined, { shallow: true });
    };
    return (
        <>
            <h1>About</h1>
            <ul>
                {postList.map((post:any) => 
                    <li key={post.id}>
                        {post.title}
                    </li>)}
            </ul>
            <Header/>
            <button onClick={handleClick}>Next page</button>
        </>
    )
}

About.Layout = AdminLayout;
export async function getStaticProps(){
    console.log('static props');
    return {
        props: {}
    }
}

// About.Layout = MainLayout;
// export function getServerSideProps(){
//     return {
//         props: {}
//     }
// }