import { useReducer } from "react";
import { postsReducer } from "./PostReducer";
let nextId = 2
const ObjectEx = () => {
    // const [state, dispatch] = useReducer(reducer, initialArg, init?)


    const initposts = () => {
        return [{ id: 1, title: "post one", likes: 0 }];
    };

    // const postsReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'add':
    //             return [...state, { id: nextId++, title: action.title, likes: 0 }]

    //         case 'delete':
    //             return state.filter((p) => p.id !== action.id);

    //         case "like":
    //             return state.map((p) =>
    //                 p.id === action.id
    //                     ? { ...p, likes: p.likes + 1 } // Create a new post object with updated likes
    //                     : p
    //             );
    //         default:
    //             state;
    //     }
    // }

    const [posts, setPosts] = useReducer(postsReducer, null, initposts);

    const handleDelete = (id) => {
        setPosts({ type: 'delete', id })
    }

    const handleLike = (id) => {
        setPosts({ type: 'like', id })
    }

    console.log(posts);
    return (
        <div>
            <button
                onClick={() =>
                    setPosts({ type: "add", title: "post 2" })}
                className="bg-slate-400 m-1 p-1 rounded-md">Add
            </button>

            {posts.length > 0 &&
                posts.map((p) => (
                    <div key={p.id}>
                        <h2>{p.title}</h2>
                        <button className="bg-slate-400 m-1 p-1 rounded-md"
                            onClick={() => handleDelete(p.id)}>Delete
                        </button>

                        <button className="bg-slate-400 m-1 p-1 rounded-md"
                            onClick={() => handleLike(p.id)}>
                            Like {p.likes}
                        </button>
                    </div>
                ))}
        </div>
    );
};
export default ObjectEx;