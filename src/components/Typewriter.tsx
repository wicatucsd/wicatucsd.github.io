'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function Typewriter({ text, speed = 100, className = '' }: TypewriterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className={className}>
      {text.slice(0, index)}
      <span className="blink-cursor">|</span>
    </h1>
  );
}