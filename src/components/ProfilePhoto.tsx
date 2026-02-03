'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProfilePhoto() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);

      // Смещение влево до -400px при полной прокрутке
      setOffset(-progress * 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 z-30 pointer-events-none transition-transform duration-100 hidden md:block"
      style={{ transform: `translateX(${offset}px)` }}
    >
      <Image
        src="/Pavel-Alekseev-removebg-preview.png"
        alt="Pavel Alekseev"
        width={300}
        height={400}
        className="object-contain [filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_8px_white)_drop-shadow(0_0_12px_white)]"
        priority
      />
    </div>
  );
}
