import React from "react";
import { ArrowRight } from "lucide-react";

const Blog = ({ title, blogs }) => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      desc: "How emerging technologies like AI and serverless are shaping the future of web platforms.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=900",
      date: "Nov 4, 2025",
      author: "Saif",
    },
    {
      id: 2,
      title: "Design Thinking in Product Strategy",
      desc: "Why understanding the user journey drives better innovation and design outcomes.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      date: "Oct 28, 2025",
      author: "Saif",
    },
    {
      id: 3,
      title: "Creating a Strong Brand Identity",
      desc: "Tips and tools for building consistent branding across digital channels.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      date: "Oct 12, 2025",
      author: "Saif",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-[#EAF4F4] via-white to-[#F9FAFB] relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008081]/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8A73]/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {title} <span className="text-[#3780B2]">Blog</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Featured Post */}
          <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src={`http://localhost:1337${blogs[0].image?.url}`}
              alt={posts[0].title}
              className="w-full h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-sm uppercase tracking-wide text-[#FF8A73] font-semibold">
                {posts[0].date}
              </p>
              <h3 className="text-3xl font-bold mt-3 mb-4">{posts[0].title}</h3>
              <p className="text-white/80 text-lg mb-6 max-w-xl">
                {posts[0].description}
              </p>
              <button className="bg-[#3780B2] hover:bg-[#2386c7] px-5 py-2 rounded-full font-semibold transition-colors">
                Read More
              </button>
            </div>
          </div>

          {/* Smaller Posts */}
          <div className="flex flex-col gap-6">
            {blogs.slice(1).map((post) => (
              <div
                key={post.id}
                className="group flex flex-col md:flex-row md:items-center gap-6 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="md:w-1/3 h-[200px] overflow-hidden">
                  <img
                    src={`http://localhost:1337${post.image.url}`}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 p-6">
                  <p className="text-sm text-[#3780B2] font-semibold mb-2">
                    {post.date}
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3780B2] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button className="inline-flex items-center text-[#3780B2] font-semibold group-hover:text-[#FF8A73] transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="mt-6 bg-[#3780B2] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all font-semibold flex items-center gap-2">
                View All Posts <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
