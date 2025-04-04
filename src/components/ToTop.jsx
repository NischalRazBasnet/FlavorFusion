import { button } from '@material-tailwind/react';
import React, { useEffect, useRef } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

export default function ToTop() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        ref.current.style.display = 'block';
      } else {
        ref.current.style.display = 'none';
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      ref={ref}
      className='fixed bottom-10 right-10 bg-black text-white p-4 rounded-full cursor-pointer'
    >
      <FaArrowUpLong />
    </button>
  );
}
