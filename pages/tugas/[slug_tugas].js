import React from 'react';
import { useRouter } from 'next/router';

const tugas = ({posts}) => {
    const router = useRouter();
    const {slug_tugas} = router.query;
    
    return (
        <div>
            <h1>Tugas Yuma Rakha Samodra Sikayo</h1>
            {posts
            .filter((post)=> post.id == slug_tugas)
            .map((post) => (
                <div key={post.id}>
                    <h2>Username : {post.username}</h2>
                    <p>Email : {post.email}</p>
                    
                </div>
            ))}
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    // Buat daftar path berdasarkan ID user
    const paths = users.map((user) => ({
        params: { slug_tugas: user.id.toString() }, // Pastikan slug dalam bentuk string
    }));

    return {
        paths,
        fallback: true, // true -> halaman akan dibuat saat pertama kali diakses jika belum ada
    };
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await res.json();

    return{
        props: {
            posts,
        },
    };
}

export default tugas;