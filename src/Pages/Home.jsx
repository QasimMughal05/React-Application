import React, { useEffect, useState } from "react";
import PostCreate from "./PostCreate";
import PostItem from "../Components/PostItem";

const Home = () => {
    const [posts, setposts] = useState([ ]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(true)


    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(res=>res.json())
        .then(data=>{
            setposts(data);
            setloading(false); 
        })
        .catch((err) =>{
            seterror(err.message);
            setloading(false); 
        });
    },[]);

    const handleDelete = (id)=>{
       
        setposts(posts.filter((posts) => posts.id !== id))
        fetch("http://localhost:3000/posts/" + id,{
            method:"DELETE",
        });
        
    }  

    return(
        <>
        {loading && <h1>loading.....</h1>}
        {error && <h1>{error}</h1>}
       <PostItem posts={posts} handleDelete={handleDelete}/>
        </>
    );
};

export default Home;