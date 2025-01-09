const PostItem = ({ posts, handleDelete }) =>  {
    return(
        <>
        {posts.map((post) => (
            <div key={post.id} className="p-6 border-b">
                <div className="mb-4 flex justify-between items-start">
                    <div>
                        <h2 className="text-bold mb-2 text-lg text-indigo-500">{post.title}</h2>
                        <small className="text-gray-500 text-xs">Posted On: {post.created_at}</small>
                    </div>
                    <button onClick={()=>handleDelete(post.id)}
                     className="h-6 w-6 text-white bg-red-500 rounded-full">
                        X
                    </button>
                </div>
                <p>{post.body}</p>
            </div>
           ))}
   
        </>
    );
};
export default PostItem;