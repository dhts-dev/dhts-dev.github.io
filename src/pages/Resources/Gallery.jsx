import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const images = [
  { src: '/images/garments.jpeg', title: 'Garments Team', fact: 'Our skilled garment workers in action.' },
  { src: '/images/food.jpeg', title: 'Food Service', fact: 'Serving smiles and delicious meals.' },
  { src: '/images/driver.jpeg', title: 'Driver', fact: 'On the road to success.' },
  { src: '/images/legal info.jpeg', title: 'Legal Info', fact: 'Ensuring compliance and safety.' },
  { src: '/images/hiring guide.jpeg', title: 'Hiring Guide', fact: 'Guiding new talent every day.' },
  { src: '/images/post a job.jpeg', title: 'Post a Job', fact: 'Connecting employers and talent.' },
  { src: '/images/request a team.jpeg', title: 'Request a Team', fact: 'Building strong teams together.' },
  { src: '/images/for employee.jpeg', title: 'For Employees', fact: 'Empowering our workforce.' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center pt-16 lg:pt-20">
        <h1 className="text-5xl font-extrabold text-[#f7931e] mb-2 drop-shadow-lg tracking-tight">Gallery</h1>
        <h2 className="text-2xl font-bold text-[#333] mb-4 animate-pulse">A Glimpse Into Our Vibrant Community</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl text-center">From team celebrations to on-the-job moments, our gallery captures the spirit, dedication, and joy of our people. Hover over any photo for a fun fact, and click to see it in full glory!</p>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 w-full max-w-6xl space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="mb-6 break-inside-avoid rounded-xl overflow-hidden shadow-xl cursor-pointer group relative transition-transform duration-200 hover:scale-105" onClick={() => setSelected(img.src)}>
              <img src={img.src} alt={img.title} className="w-full object-cover rounded-xl min-h-[220px] max-h-[340px]" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg animate-fade-in">{img.title}</h3>
                <p className="text-white text-base animate-fade-in delay-100">{img.fact}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Lightbox Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
            <img src={selected} alt="Enlarged" className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white animate-zoom-in" />
          </div>
        )}
        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#f7931e] mb-2">Want to see your story here?</h3>
          <p className="text-gray-800 mb-4">Share your favorite work moments with us or follow our journey on social media for more behind-the-scenes fun!</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#d87c0e] transition">Share Your Photo</a>
            <a href="#" className="bg-white border-2 border-[#f7931e] text-[#f7931e] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#f7931e] hover:text-white transition">Follow Us</a>
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery; 