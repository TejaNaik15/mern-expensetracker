import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-400 via-pink-500 to-indigo-500 py-10 flex justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 px-8 py-3 rounded-xl shadow-lg flex items-center space-x-4 hover:shadow-xl transition duration-300 max-w-max">
        <span className="text-white font-bold text-3xl">
          Developed by
        </span>
        <a
          href="https://tejanaik15.github.io/personal-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <span className="bg-gradient-to-r from-lime-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent font-extrabold text-3xl">
            Teja
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
