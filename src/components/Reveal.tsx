"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number; // ms
  as?: keyof JSX.IntrinsicElements;
}

export default function Reveal({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error – dynamic tag
    <Tag ref={ref} className={`${animation} ${className}`}>
      {children}
    </Tag>
  );
}
