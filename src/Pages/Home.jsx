import React, { useEffect, useState } from "react";
import PostCreate from "./PostCreate";
import PostItem from "../Components/PostItem";

const Home = () => {
    const [posts, setposts] = useState([ ]);
    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(res=>res.json())
        .then(data=>setposts(data))
    },[])

    const handleDelete = (id)=>{
       
        setposts(posts.filter((posts) => posts.id !== id))
        fetch("http://localhost:3000/posts/" + id,{
            method:"DELETE",
        });
        
    }  

    return(
        <>
       <PostItem posts={posts} handleDelete={handleDelete}/>
        </>
    );
};

export default Home;