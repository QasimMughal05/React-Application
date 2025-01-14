import { useContext } from "react";
import Form2 from "../Form2"
import { MyContext } from "../MyContext";

const Posts = () => {
    const {post} = useContext(MyContext)
    return (
        <>
            <h1>Posts</h1>
            <Form2/>

            {post.length > 0 &&
            post.map (p => (
                <div key={p.id}>
                    <h2>{p.title}</h2>
                </div>
            ))}
        </>
    )
}
export default Posts;