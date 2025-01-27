import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PostItem = ({ posts, handleDelete }) => {
    const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

    // Fetching a random joke from JokeAPI
    useEffect(() => {
        const fetchJoke = async () => {
        try {
            const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
            if (response.data.type === 'single') {
            setJoke(response.data.joke);
            } else if (response.data.type === 'twopart') {
            setJoke(`${response.data.setup} - ${response.data.delivery}`);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching joke:', error);
            setLoading(false);
        }
    };

    fetchJoke();
  }, []);

    return (
        <>
            <div className="font-sans">
                {/* Hero Section */}
                <section className="relative text-white">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://img.freepik.com/free-vector/gradient-style-network-connection-background_23-2148879891.jpg?t=st=1737877696~exp=1737881296~hmac=8b6a6278c58e59d681014887c2542930f1053ae0a8bd0aeb758d90bfd605b4ce&w=1800')",
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-500 opacity-70"></div>

                    {/* Hero Content */}
                    <motion.div
                        className="relative flex flex-col items-center text-center py-24 px-6 lg:py-40 lg:px-16 z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                            Unlock a World of Stories
                        </h1>
                        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto font-medium opacity-90 drop-shadow-md">
                            Dive into captivating insights, inspiring ideas, and engaging narratives crafted by our vibrant community of thinkers and creators.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-4 rounded-full font-semibold shadow-2xl hover:from-indigo-500 hover:to-purple-600 transition"
                        >
                            Explore Now
                        </motion.button>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 z-0">
                        {/* Floating Circles */}
                        <motion.div
                            className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-30 blur-2xl"
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        ></motion.div>
                        <motion.div
                            className="absolute bottom-16 right-20 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-3xl"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        ></motion.div>
                        <motion.div
                            className="absolute top-32 right-40 w-28 h-28 bg-indigo-400 rounded-full opacity-25 blur-xl"
                            animate={{ x: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        ></motion.div>
                    </div>
                </section>
                <div className="py-16 bg-white">
                    {/* Section 2: API Data Section (Joke) */}
                    <section className="bg-gray-100 py-10 rounded-lg shadow-md">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Here's a Random Joke</h3>
                        {loading ? (
                            <p className="text-lg text-gray-700">Loading joke...</p>
                        ) : (
                            <p className="text-lg text-gray-800 italic">{joke || 'No joke available!'}</p>
                        )}
                        </div>
                    </section>
                </div>

                {/* About Us Section */}
                <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Left Column */}
                            <motion.div
                                className="text-center lg:text-left"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                                    Who We Are
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
                                    We are passionate about connecting people through stories. Our platform is a hub for sharing ideas, insights, and experiences. Join us in building a community that thrives on creativity and innovation.
                                </p>
                                <button className="px-8 py-3 bg-indigo-500 text-white rounded-full font-medium shadow-lg hover:bg-indigo-600 transition transform hover:scale-105">
                                    Learn More
                                </button>
                            </motion.div>

                            {/* Right Column */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="relative group">
                                    <img
                                        src="https://img.freepik.com/free-vector/woman-standing-mammography-machine-examination-disease-diagnosis_74855-11248.jpg?semt=ais_hybrid"
                                        alt="About us"
                                        className="rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
                                    />
                                    {/* Decorative Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500 opacity-30 rounded-xl group-hover:opacity-50 transition duration-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>


                <div>
                    {/* Recent Posts Section */}
                    <section className="py-16 bg-white">
                        <div className="max-w-6xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl font-bold text-indigo-600 mb-4">Recent Posts</h2>
                                <p className="text-lg text-gray-600">
                                    Dive into the latest stories and updates from our community.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.length === 0 ? (
                                    <div className="text-center col-span-3 text-gray-500 py-10">
                                        <p className="text-lg">No posts available. Create a new post to get started!</p>
                                        <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                                            Create New Post
                                        </button>
                                    </div>
                                ) : (
                                    posts.map((post) => (
                                        <div
                                            key={post.id}
                                            className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                                        >
                                            <h3 className="text-xl font-semibold text-indigo-500 mb-2">{post.title}</h3>
                                            <small className="text-gray-400 block mb-4">
                                                Posted On: {new Date(post.created_at).toLocaleDateString()}
                                            </small>
                                            <p className="text-gray-700 mb-4 line-clamp-3">{post.body}</p>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="text-sm text-red-500 hover:text-red-600"
                                            >
                                                Delete Post
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-6xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Features</h2>
                                <p className="text-lg text-gray-600">
                                    Explore the key features that make our platform stand out.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                                    <h3 className="text-2xl font-bold text-indigo-500 mb-2">Feature One</h3>
                                    <p className="text-gray-600">Discover the first feature that makes our platform unique.</p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                                    <h3 className="text-2xl font-bold text-indigo-500 mb-2">Feature Two</h3>
                                    <p className="text-gray-600">Dive into our second feature designed for efficiency.</p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                                    <h3 className="text-2xl font-bold text-indigo-500 mb-2">Feature Three</h3>
                                    <p className="text-gray-600">Learn how the third feature enhances your experience.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="py-16 bg-indigo-500 text-white">
                        <div className="max-w-6xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl font-bold mb-4">What People Say</h2>
                                <p className="text-lg">Hear from our satisfied users and community members.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="p-6 bg-white text-gray-800 rounded-lg shadow">
                                    <p className="mb-4">"This platform transformed the way I connect with people."</p>
                                    <h3 className="font-bold">- Alex Johnson</h3>
                                </div>
                                <div className="p-6 bg-white text-gray-800 rounded-lg shadow">
                                    <p className="mb-4">"A truly innovative way to share ideas."</p>
                                    <h3 className="font-bold">- Emily Smith</h3>
                                </div>
                                <div className="p-6 bg-white text-gray-800 rounded-lg shadow">
                                    <p className="mb-4">"Highly recommend to anyone looking for a creative outlet."</p>
                                    <h3 className="font-bold">- Michael Brown</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
export default PostItem;