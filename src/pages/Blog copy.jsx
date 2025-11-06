import React from "react";

const blogs = [
  {
    title: "Building Scalable Web Applications",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    author: "Jane Cooper",
    date: "October 12, 2025",
    excerpt:
      "Discover key strategies for developing scalable web applications that handle growth efficiently and deliver seamless user experiences.",
  },
  {
    title: "The Future of AI in Software Development",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    author: "Michael Smith",
    date: "October 10, 2025",
    excerpt:
      "Artificial Intelligence is revolutionizing software engineering — from code generation to intelligent testing automation.",
  },
  {
    title: "Why UI/UX Matters More Than Ever",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    author: "Sarah Johnson",
    date: "October 9, 2025",
    excerpt:
      "In today’s competitive market, a strong user interface and experience design can make or break a digital product.",
  },
  {
    title: "Modern DevOps Culture and Practices",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
    author: "David Lee",
    date: "October 7, 2025",
    excerpt:
      "Learn how DevOps principles enhance collaboration, automation, and delivery speed across development teams.",
  },
  {
    title: "How to Choose the Right Tech Stack",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    author: "Emily Brown",
    date: "October 6, 2025",
    excerpt:
      "Picking the right technologies early in a project saves time, money, and helps ensure long-term scalability.",
  },
  {
    title: "SaaS Security Best Practices",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    author: "Robert Wilson",
    date: "October 5, 2025",
    excerpt:
      "Security remains one of the biggest challenges in SaaS products — here’s how to build trust with users.",
  },
  {
    title: "Data-Driven Decision Making",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "Anna Kim",
    date: "October 3, 2025",
    excerpt:
      "Companies that leverage data effectively outperform their competitors by staying adaptive and informed.",
  },
  {
    title: "Integrating APIs Seamlessly",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    author: "John Adams",
    date: "October 2, 2025",
    excerpt:
      "Learn the best approaches to connect your applications through APIs for greater interoperability and performance.",
  },
  {
    title: "From Idea to Product Launch",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b",
    author: "Lisa Green",
    date: "October 1, 2025",
    excerpt:
      "Transforming an idea into a successful product requires strategic planning, design thinking, and agile execution.",
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Blog</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Insights, tutorials, and updates from our development team.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 hover:text-indigo-600 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="text-sm text-gray-500 flex justify-between">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
