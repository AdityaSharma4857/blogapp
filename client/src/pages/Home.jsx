import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  useEffect(() => {
    getPosts();
  }, [posts]);


  const getPosts = async () => {
    const response = await fetch("http://localhost:5000/get-blogs");
    const data = await response.json();
    setPosts(data.blogs);
  };


  const deletePost = async (id) => {
    const response = await fetch(`http://localhost:5000/delete-blog/${id}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      toast.success("Blog deleted successfully");
    }
    else {
      toast.error("Something went wrong");
    }
  }

  const updatePost = async (id) => {
    // console.log(title, description, id);
    const response = await fetch(`http://localhost:5000/update-blog/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({title, description}),
    })

    if (response.status === 200) {
      toast.success("Blog updated successfully");
      setTimeout(() => window.location.reload(true), 2000);
    }
    else {
      toast.error("Something went wrong");
    }
  }


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="mt-10 mb-32">
        {
          posts.map((post) => {
            return (
              <div className="w-[90vw] lg:w-[50vw] mx-auto py-8 px-8 rounded-md shadow-md my-5 bg-white" key={post._id}>
                <div className="flex justify-end text-gray-400 gap-5 text-2xl mb-4">
                  <AiFillDelete className="hover:text-red-400 cursor-pointer" title="Delete" onClick={() => deletePost(post._id)} />
                  <MdEdit className={`${selectedPost === post._id && editPost ? "text-red-400 scale-110" : "text-gray-400"} hover:text-red-400 cursor-pointer`} title="Edit" onClick={() => {
                    setEditPost(!editPost);
                    setSelectedPost(post._id);
                  }}
                   />
                </div>
                <h2 className="text-2xl font-bold outline-none focus:bg-gray-200" contentEditable={editPost} suppressContentEditableWarning={true} onInput={(e) => setTitle(e.target.innerText)}>{post.title}</h2>
                <h3 className="text-base font-medium mt-3 text-gray-500 outline-none focus:bg-gray-200" contentEditable={editPost} suppressContentEditableWarning={true} onInput={(e) => setDescription(e.target.innerText)}>{post.description}</h3>
                <button className={`${ selectedPost === post._id && editPost?"block":"hidden"} bg-purple-500 py-2 px-4 mt-8 rounded-md text-white font-medium hover:bg-purple-700 `} title="Update Post" onClick={() => updatePost(post._id)}>Update Post</button>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Home