// components/ClientCarousel.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Article = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  featuredArticles: Article[];
};

export default function ClientCarousel({ featuredArticles }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % featuredArticles.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: scrollIndex * 160,
        behavior: "smooth",
      });
    }
  }, [scrollIndex]);

  return (
    <section className="relative overflow-hidden mb-12">
      <div
        ref={containerRef}
        className="flex space-x-4 px-4 transition-all duration-500 ease-in-out"
        style={{ width: "100%", overflowX: "auto" }}
      >
        {featuredArticles.map((article) => (
          <div key={article.id} className="w-40 flex-shrink-0">
            <div className="relative w-full h-28">
              <Image
                src={article.image}
                alt="記事画像"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm mt-2 text-center text-gray-700 truncate">
              {article.title.slice(0, 10)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
