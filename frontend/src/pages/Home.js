import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Shield, BookOpen, Terminal, Globe, ArrowRight } from 'lucide-react';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setArticles(response.data);
      } catch (err) { console.error(err); }
    };
    fetchArticles();
  }, []);

  const categories = [
    { title: "Cybersecurity News", icon: <Globe />, color: "text-blue-400", type: "News" },
    { title: "Secure Coding", icon: <Terminal />, color: "text-green-400", type: "Tutorial" },
    { title: "Case Studies", icon: <BookOpen />, color: "text-purple-400", type: "Case Study" },
    { title: "Best Practices", icon: <Shield />, color: "text-accentRed", type: "Best Practice" }
  ];

  return (
    <div className="bg-darkBg min-h-screen text-neutralWhite">
      {/* Hero Section */}
      <section className="py-16 md:py-28 text-center bg-gradient-to-b from-cardBg to-darkBg px-6">
        <div className="inline-block px-4 py-1 border border-accentRed text-accentRed rounded-full text-[10px] md:text-xs font-bold mb-6 animate-pulse">
          SYSTEM STATUS: SECURE
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Modern Security <br /> <span className="text-accentRed">Infrastructure</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-xl px-4">
          Professional compliance tracking, threat intelligence, and defensive engineering in one unified portal.
        </p>
      </section>

      {/* Dynamic Blog Sections */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {categories.map((cat, i) => (
            <div key={i} className="bg-cardBg p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-accentRed/40 transition-all">
              <div className={`${cat.color} mb-6 flex items-center gap-3`}>
                {cat.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{cat.title}</span>
              </div>
              
              <div className="space-y-6">
                {articles.filter(a => a.type === cat.type).length > 0 ? (
                  articles.filter(a => a.type === cat.type).map(article => (
                    <div key={article._id} className="group cursor-pointer">
                      <h4 className="text-lg md:text-xl font-bold group-hover:text-accentRed transition-colors flex items-center justify-between">
                        {article.title}
                        <ArrowRight size={18} className="hidden md:block opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </h4>
                      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{article.content}</p>
                    </div>
                  ))
                ) : (
                  <div className="py-10 text-center border border-dashed border-gray-800 rounded-lg text-gray-600 italic text-sm">
                    No recent {cat.title.toLowerCase()} published.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;