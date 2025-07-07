import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const blogs = [
  {
    title: 'How to Prepare for Overseas Jobs',
    image: '/images/blog.png',
    excerpt: 'Get tips and tricks for landing your dream job abroad, from resume writing to interview preparation and cultural adaptation.',
    content: 'Full article: Here you will find detailed steps and expert advice on preparing for overseas jobs, including documentation, interviews, and cultural tips. (You can expand this content as needed.)',
    author: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/100?u=Priya',
    date: 'May 2024',
    tags: ['Overseas', 'Career'],
    featured: true,
    link: '#',
  },
  {
    title: 'Top Skills Employers Look For',
    image: '/images/garments.jpeg',
    excerpt: 'Discover the most in-demand skills in today\'s job market and how you can develop them to boost your career prospects.',
    content: 'Full article: Employers are looking for adaptability, communication, and technical skills. Here\'s how you can develop them and stand out.',
    author: 'Rahul Verma',
    avatar: 'https://i.pravatar.cc/100?u=Rahul',
    date: 'April 2024',
    tags: ['Skills', 'Jobs'],
    featured: false,
    link: '#',
  },
  {
    title: 'Success Stories: Our Candidates',
    image: '/images/food.jpeg',
    excerpt: 'Read inspiring stories from candidates who found their perfect job through our platform and changed their lives.',
    content: 'Full article: Meet our successful candidates and learn how Sunvi Hi-Tech helped them achieve their dreams.',
    author: 'Sunvi Team',
    avatar: 'https://i.pravatar.cc/100?u=Sunvi',
    date: 'March 2024',
    tags: ['Success', 'Stories'],
    featured: false,
    link: '#',
  },
];

const featured = blogs.find(b => b.featured);
const others = blogs.filter(b => !b.featured);

const BlogDetailModal = ({ blog, onClose }) => {
  if (!blog) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-slide-up" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-[#f7931e]" onClick={onClose}>&times;</button>
        <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover rounded-xl mb-6" />
        <div className="flex items-center mb-4">
          <img src={blog.avatar} alt={blog.author} className="w-10 h-10 rounded-full mr-3" />
          <span className="font-bold text-[#f7931e]">{blog.author}</span>
          <span className="ml-4 text-gray-500 text-sm">{blog.date}</span>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-[#f7931e]">{blog.title}</h2>
        <div className="flex gap-2 mb-4">
          {blog.tags.map((tag, i) => (
            <span key={i} className="bg-[#f3f5ed] text-[#f7931e] px-3 py-1 rounded-full text-xs font-semibold">#{tag}</span>
          ))}
        </div>
        <p className="text-gray-700 text-lg mb-4">{blog.excerpt}</p>
        <div className="text-gray-800 text-base mb-2">{blog.content}</div>
        <div className="mt-6 flex justify-end">
          <button className="bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d87c0e] transition" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [openBlog, setOpenBlog] = useState(null);
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center pt-16 lg:pt-20">
        <h1 className="text-5xl font-extrabold text-[#f7931e] mb-2 drop-shadow-lg tracking-tight">Blogs</h1>
        <h2 className="text-2xl font-bold text-[#333] mb-4 animate-pulse">Insights, Inspiration & Success Stories</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl text-center">Explore expert advice, trending topics, and real-life journeys from our vibrant job-seeker community. Hover for more info, and get inspired to take your next step!</p>
        {/* Featured Blog */}
        {featured && (
          <div className="w-full max-w-4xl mb-12 bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fade-in items-stretch">
            <div className="w-full md:w-1/2 h-72 md:h-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            </div>
            <div className="p-8 flex flex-col flex-1 h-full justify-between">
              <div>
                <div className="flex items-center mb-2">
                  {/* Featured Blog author avatar */}
                  <div className="w-8 h-8 overflow-hidden rounded-full mr-3">
                    <img
                      src={featured.avatar}
                      alt={featured.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-[#f7931e]">{featured.author}</span>
                  <span className="ml-4 text-gray-500 text-sm">{featured.date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-[#f7931e]">{featured.title}</h2>
                <p className="text-gray-700 mb-4 flex-1">{featured.excerpt}</p>
                <div className="flex gap-2 mb-4">
                  {featured.tags.map((tag, i) => (
                    <span key={i} className="bg-[#f3f5ed] text-[#f7931e] px-3 py-1 rounded-full text-xs font-semibold">#{tag}</span>
                  ))}
                </div>
              </div>
              <button className="inline-block mt-auto bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d87c0e] transition" onClick={() => setOpenBlog(featured)}>Read More</button>
            </div>
          </div>
        )}

        {/* Other Blogs */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12" style={{ width: '780px' }}>
            {others.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300 animate-fade-in w-[370px]">
                <img src={blog.image} alt={blog.title} className="w-full min-h-[180px] h-56 object-cover rounded-t-2xl" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center mb-2">
                    <img src={blog.avatar} alt={blog.author} className="w-8 h-8 rounded-full mr-2" />
                    <span className="font-bold text-[#f7931e]">{blog.author}</span>
                    <span className="ml-3 text-gray-500 text-xs">{blog.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-[#f7931e]">{blog.title}</h2>
                  <p className="text-gray-700 mb-4 flex-1">{blog.excerpt}</p>
                  <div className="flex gap-2 mb-4">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="bg-[#f3f5ed] text-[#f7931e] px-3 py-1 rounded-full text-xs font-semibold">#{tag}</span>
                    ))}
                  </div>
                  <button className="inline-block mt-auto bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d87c0e] transition" onClick={() => setOpenBlog(blog)}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BlogDetailModal blog={openBlog} onClose={() => setOpenBlog(null)} />
      </main>
      <Footer />
    </div>
  );
};

export default Blogs; 