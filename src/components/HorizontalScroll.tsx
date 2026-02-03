'use client';

import { useEffect, useRef, useState } from 'react';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.height = '';
      if (containerRef.current) {
        containerRef.current.style.transform = '';
      }
      return;
    }

    const content = contentRef.current;
    const blog = blogRef.current;
    if (!content) return;

    const updateBodyHeight = () => {
      const totalWidth = content.scrollWidth;
      const viewportWidth = window.innerWidth;
      const blogScrollHeight = blog ? blog.scrollHeight - window.innerHeight : 0;

      // Общая высота = горизонтальный скролл + вертикальный скролл блога
      const totalHeight = totalWidth + Math.max(0, blogScrollHeight);
      document.body.style.height = `${totalHeight}px`;
    };

    updateBodyHeight();

    const handleScroll = () => {
      const content = contentRef.current;
      const blog = blogRef.current;
      if (!content) return;

      const scrollY = window.scrollY;
      const totalWidth = content.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Точка, где горизонтальный скролл заканчивается (достигли блога)
      const horizontalScrollEnd = totalWidth - viewportWidth;

      // Высота контента блога для вертикального скролла
      const blogScrollHeight = blog ? blog.scrollHeight - viewportHeight : 0;

      if (scrollY <= horizontalScrollEnd) {
        // Горизонтальный скролл
        const translateX = -scrollY;
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(${translateX}px)`;
        }

        // Сбросить скролл блога
        if (blog) {
          blog.scrollTop = 0;
        }

        // Прогресс только для горизонтальной части
        const totalScroll = horizontalScrollEnd + blogScrollHeight;
        setProgress((scrollY / totalScroll) * 100);
      } else {
        // Зафиксировать горизонтальный скролл в конце
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(${-horizontalScrollEnd}px)`;
        }

        // Вертикальный скролл блога
        if (blog) {
          const blogScrollY = scrollY - horizontalScrollEnd;
          blog.scrollTop = blogScrollY;
        }

        // Прогресс для вертикальной части
        const totalScroll = horizontalScrollEnd + blogScrollHeight;
        setProgress((scrollY / totalScroll) * 100);
      }
    };

    const handleResize = () => {
      updateBodyHeight();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Небольшая задержка для корректного расчёта после рендера
    setTimeout(updateBodyHeight, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.height = '';
    };
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <div ref={contentRef} className="flex flex-col min-h-screen">
          {children}
        </div>
      ) : (
        <>
          <div
            ref={containerRef}
            className="fixed top-0 left-0 h-screen will-change-transform"
          >
            <div ref={contentRef} className="flex h-screen gap-0">
              {/* Все секции кроме последней (блога) */}
              {Array.isArray(children) ? children.slice(0, -1) : children}

              {/* Секция блога с вертикальным скроллом */}
              <div
                ref={blogRef}
                className="w-screen h-screen flex-shrink-0 overflow-hidden"
                style={{ minWidth: '100vw' }}
              >
                {Array.isArray(children) ? children[children.length - 1] : null}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div
            className="scroll-progress fixed bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#1a1a2e]/20 rounded-full overflow-hidden"
            style={{ '--progress': `${progress}%` } as React.CSSProperties}
          />
        </>
      )}
    </>
  );
}
