import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const CreateBlog = () => {

  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const blog = {
      title,
      description,
    };

    // Below code is to send the data to the backend server

    const response = await fetch("http://localhost:5000/post-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog),
    });

    if (response.status === 200) {
      toast.success("Blog posted successfully");
      e.target.title.value = "";
      e.target.description.value = "";
      setTimeout(() => navigate("/"), 2000);
    }
    else {
      toast.error("Something went wrong");
      e.target.title.value = "";
      e.target.description.value = "";
    }


  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="w-[90vw] lg:w-[60vw] mx-auto mt-10 mb-32">
        <h1 className="text-2xl font-bold text-center">Create Blog</h1>
        <form className="flex flex-col mt-5" onSubmit={postData}>
          <label htmlFor="title" className="font-medium text-lg">Title : {" "}</label>
          <input type="text" name="title" placeholder="Enter your blog title" className="py-2 px-4 border-2 border-gray-300 rounded-md mt-2 text-lg focus:outline-purple-500" required />
          <label htmlFor="description" className="font-medium text-lg mt-5">Description : {" "}</label>
          <textarea type="text" name="description" placeholder="Enter your blog description" rows={8} className="py-2 px-4 border-2 border-gray-300 rounded-md mt-2 text-lg focus:outline-purple-500" required />
          <button type="submit" className='bg-purple-500 py-3 mt-6 rounded-md shadow-lg text-lg font-semibold hover:bg-purple-600 text-white'>Post</button>
        </form>
      </div>
    </>
  )
}

export default CreateBlog