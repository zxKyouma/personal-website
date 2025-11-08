"use client";

import { Brain, Dumbbell, TrendingUp, BookOpen, FlaskConical, Sparkles } from 'lucide-react';

const interests = [
  {
    category: 'Research Interests',
    icon: Brain,
    items: [
      'Neuroscience & NeuroAI',
      'Psychedelics & Consciousness',
      'Deep Learning for Medical Imaging',
      'Alzheimer\'s Disease Biomarkers',
    ],
  },
  {
    category: 'Technical Skills',
    icon: FlaskConical,
    items: [
      'PyTorch & TensorFlow',
      'fMRI Analysis & Neuroimaging',
      'Clinical Trial Deployment',
      'Machine Learning Architecture',
    ],
  },
  {
    category: 'Fitness & Health',
    icon: Dumbbell,
    items: [
      'Marathon Running',
      'Weightlifting',
      'Performance Optimization',
      'Biohacking',
    ],
  },
  {
    category: 'Intellectual Pursuits',
    icon: BookOpen,
    items: [
      'Philosophy',
      'Consciousness Studies',
      'Finance & Investing',
      'Behavioral Science',
    ],
  },
  {
    category: 'Academic Achievements',
    icon: Sparkles,
    items: [
      'IChO 2022 Silver Medal',
      'IMO & IOL Top 12 Malaysia',
      'Top 10% Medical Cohort',
      'Stanford iGEM Gold Medal',
    ],
  },
  {
    category: 'Investment Focus',
    icon: TrendingUp,
    items: [
      'AI & Healthcare',
      'Biotech Innovation',
      'Long-term Value Investing',
      'Portfolio Strategy',
    ],
  },
];

const CareersSection = () => {
  return (
    <section className="bg-space py-8 md:py-16 lg:py-32">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-6 text-[clamp(2rem,6vw,4.5rem)] font-light uppercase leading-[1.1] text-mist">
            Interests & <span className="font-bold">Expertise</span>
          </h2>
          <p className="mx-auto max-w-3xl text-21 text-mist/80">
            From brains and machines to marathons and markets—exploring the intersection of neuroscience, AI, and human performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-strokeDark bg-eerie p-6 transition-all duration-300 hover:border-fire"
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/images/grid-dot-6.png')`,
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'repeat'
                  }}
                />
                <div className="relative">
                  <Icon className="mb-4 h-8 w-8 text-fire" />
                  <h3 className="mb-4 text-xl uppercase tracking-wide text-mist">
                    {interest.category}
                  </h3>
                  <ul className="space-y-2">
                    {interest.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-15 font-light text-mist/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fire" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;