"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const setup = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      if (!ctx) return;
      
      time += 0.005;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(230, 57, 70, 0.15)'); // fire
      gradient.addColorStop(0.5, 'rgba(255, 107, 53, 0.1)'); // orange
      gradient.addColorStop(1, 'rgba(74, 144, 226, 0.15)'); // blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

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
    <section className="relative m-2.5 min-h-[380px] overflow-hidden rounded-xl border border-strokeDark bg-space md:min-h-[580px] lg:min-h-[calc(100svh-112px)]">
      {/* Animated Gradient Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.8 }}
      />

      {/* Dot Grid Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/images/grid-dot-6.png')`,
          backgroundSize: '30px 30px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {/* Corner Decorations */}
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-dark_ef3e1868-1.svg"
        alt="Corner decoration"
        width={20}
        height={21}
        className="absolute -top-px -left-px"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-dark_ef3e1868-1.svg"
        alt="Corner decoration"
        width={20}
        height={21}
        className="absolute -top-px -right-px rotate-90"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-dark_ef3e1868-1.svg"
        alt="Corner decoration"
        width={20}
        height={21}
        className="absolute -bottom-px -left-px -rotate-90"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-dark_ef3e1868-1.svg"
        alt="Corner decoration"
        width={20}
        height={21}
        className="absolute -bottom-px -right-px rotate-180"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-between px-5 py-8 md:min-h-[580px] md:px-12 md:py-12 lg:min-h-[calc(100svh-112px)]">
        {/* Hero Headline */}
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fire via-orange-accent to-blue-accent opacity-75 blur-xl"></div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Abstract-Radiopaedia-2025-rPoster_20251104_094510_0000-3-1762580873718.jpg?width=8000&height=8000&resize=contain"
                  alt="Brandon Low"
                  width={180}
                  height={180}
                  className="relative rounded-full border-4 border-strokeDark/50 shadow-2xl"
                  priority
                />
              </div>
            </div>
            
            <h1 className="font-heading text-[clamp(2.5rem,8vw,7rem)] font-[350] uppercase leading-[0.85] tracking-[-0.05em] text-mist">
              Brandon Low
            </h1>
            <p className="mt-6 text-[clamp(1.25rem,3vw,2rem)] font-light uppercase tracking-wide text-mist/80">
              Medical Student
              <span className="mx-3 inline-block bg-gradient-to-r from-fire via-orange-accent to-blue-accent bg-clip-text text-transparent">×</span>
              AI Researcher
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#research"
            className="w-full rounded border border-mist bg-mist px-6 py-3 text-center text-15 text-space transition-all duration-[400ms] hover:bg-space hover:text-mist sm:w-auto"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="w-full rounded border border-strokeDark bg-transparent px-6 py-3 text-center text-15 text-mist transition-all duration-[400ms] hover:border-mist hover:bg-mist hover:text-space sm:w-auto"
          >
            Get in Touch
          </a>
        </div>

        {/* Bottom Content */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-12">
          <div className="text-21">
            <p className="font-light leading-[1.35] tracking-[0.01em] text-mist/90">
              Self-taught AI researcher building clinical-grade deep learning models while studying medicine at Monash University Malaysia.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg border border-strokeDark bg-eerie/50 p-4 backdrop-blur-sm">
              <span className="text-14 uppercase text-fire">Location</span>
              <h3 className="mt-2 text-15 font-normal text-mist">
                George Town, Penang, Malaysia
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;