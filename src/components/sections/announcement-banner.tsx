"use client";

import { useEffect, useRef } from 'react';
import { Trophy, Award } from 'lucide-react';

const AnnouncementBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let width = 0;
    let height = 0;
    
    const dots: { x: number; y: number; radius: number, opacity: number }[] = [];

    const setup = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      dots.length = 0;
      const numDots = Math.floor((width * height) / 3000); 
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.8,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(232, 230, 220, ${dot.opacity})`;
        ctx.fill();

        dot.y -= 0.05;
        if (dot.y < 0) {
          dot.y = height;
        }
      });

      frameId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    window.addEventListener('resize', setup);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] w-full bg-gradient-to-r from-eerie via-black to-fire/80">
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
      <div className="relative mx-auto flex w-full items-center justify-center px-5 py-2.5 md:px-12 md:py-3">
        <div className="mr-3 flex items-center gap-2 font-body text-15 leading-[1.4] text-mist md:mr-6">
          <Trophy className="h-[14px] w-[14px] shrink-0" />
          ECR 2025: Top 500/9,871 submissions (30k+ attendees)
          <Award className="h-[14px] w-[14px] shrink-0" />
        </div>
        <div className="hidden items-center gap-6 sm:flex">
          <a
            className="font-body text-14 leading-[1.4] text-mist underline underline-offset-2 transition-opacity duration-200 hover:opacity-70"
            href="#research"
          >
            View Research
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;