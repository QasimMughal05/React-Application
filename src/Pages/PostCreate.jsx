import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PostCreate = () => {
    const [title, setTitle] = useState("");
    const [body, setbody] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const newPost = {
            title,
            body,
            created_at: new Date().toLocaleDateString(),
        };

        fetch('http://localhost:3000/posts', {
            method: "POST",
            Headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        }).then(() => {
            navigate("/");
        });
        
    }

    return (
        <>
            <h1 className="font-bold text-2xl mb-6">Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label>Post Title</label>
                    <input type="text" className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block
                    mt-1 focus:ring-2" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className="mb-8">
                    <label>Post Content</label>
                    <textarea className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full
                    block mt-1 focus:ring-2" value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
                </div>
                <button className="bg-blue-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600">
                    Create
                </button>
            </form >
        </> 

    )

}

export default PostCreate;