"use client";

import { GraduationCap, Building2, Award } from 'lucide-react';

const timeline = [
  {
    year: "2022",
    title: "International Chemistry Olympiad",
    organization: "Representing Malaysia",
    description: "Silver medal, ranked 83rd out of 326 finalists from 84 countries",
    icon: Award,
  },
  {
    year: "2022-2028",
    title: "Bachelor of Medical Science and Doctor of Medicine",
    organization: "Monash University Malaysia",
    description: "Currently Year 3, Top 10% in cohort by WAM. Recipient of Graduate Student Research Incentives Award",
    icon: GraduationCap,
  },
  {
    year: "2024-Present",
    title: "Affiliate Researcher",
    organization: "iBRAIN Laboratory, Monash University",
    description: "Conducting research on AI applications in neuroscience and medical imaging. Partnered remotely for clinical translation",
    icon: Building2,
  },
  {
    year: "2024-Present",
    title: "Honorary Research Fellow",
    organization: "Alfred Health",
    description: "Contributing to clinical AI research and deployment in major healthcare institutions",
    icon: Building2,
  },
  {
    year: "2025",
    title: "AI Lead",
    organization: "Stanford iGEM Team",
    description: "Leading ML/AI development for LiRA (Liver RADAR) project. Achieved Gold Medal and Best Oncology Project",
    icon: Award,
  },
];

const VideoShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-space py-12 md:py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/20 via-fire/20 to-orange-accent/20" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-light uppercase leading-[1.1] text-mist">
              Academic & Professional <span className="text-fire">Timeline</span>
            </h2>
            <p className="text-21 text-mist/80">
              From international competitions to cutting-edge AI research
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-fire via-orange-accent to-blue-accent md:left-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                      <div className="h-4 w-4 rounded-full border-4 border-fire bg-space" />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`inline-block rounded-xl border border-strokeDark bg-eerie p-6 text-left transition-all duration-300 hover:border-fire ${isEven ? 'md:text-right' : ''}`}>
                        <div className={`mb-3 flex items-center gap-3 ${isEven ? 'md:flex-row-reverse md:justify-start' : ''}`}>
                          <Icon className="h-6 w-6 shrink-0 text-fire" />
                          <span className="rounded bg-fire/20 px-3 py-1 text-14 font-mono text-fire">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-normal text-mist">
                          {item.title}
                        </h3>
                        <p className="mb-2 text-15 text-orange-accent">
                          {item.organization}
                        </p>
                        <p className="text-15 font-light leading-relaxed text-mist/80">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;