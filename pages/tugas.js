import React from 'react';

const tugas = ({posts}) => {
    return (
        <div>
            <h1>Tugas Yuma Rakha Samodra Sikayo</h1>
            {posts.map((post) => (
                <div key={post.id} style={{marginBottom: "20px"}}>
                    <h2>Username : {post.username}</h2>
                    <p>Email : {post.email}</p>
                    
                </div>
            ))}
        </div>
    );
};

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