import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const API_URL = "http://localhost:1337";

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_URL}/api/articles/${id}?populate=*`);
        const data = await res.json();
        setBlog(data.data?.attributes);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div className="text-center py-20">Loading...</div>;

  return (
    <article className="max-w-4xl mx-auto py-20 px-4">
      <img
        src={`${API_URL}${blog.cover?.data?.attributes?.url}`}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-2xl mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">
        {new Date(blog.publishedAt).toLocaleDateString()}
      </p>
      <div className="prose prose-lg max-w-none">
        {blog.blocks?.map((block) => (
          <p key={block.id} className="mb-4">
            {block.body}
          </p>
        ))}
      </div>
    </article>
  );
};

export default SingleBlog;
