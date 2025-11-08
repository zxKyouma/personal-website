"use client";

import { Users, Briefcase, Target, Rocket } from 'lucide-react';

const idealCofounder = [
  {
    title: "Go-to-Market Expertise",
    description: "Experience navigating hospital procurement/clinical workflows (healthcare ops, hospital admin, or health IT sales)",
    icon: Briefcase,
  },
  {
    title: "Clinical Relationships",
    description: "Can build relationships with clinical champions and drive pilots",
    icon: Users,
  },
  {
    title: "Regulatory Knowledge",
    description: "Understands FDA/regulatory landscape for clinical AI (or willing to learn fast)",
    icon: Target,
  },
  {
    title: "Commercial Execution",
    description: "Complements my technical/clinical expertise with commercial execution",
    icon: Rocket,
  },
];

const CompanyChatbotComparison = () => {
  return (
    <section className="bg-space py-8 md:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-4 text-14 uppercase tracking-[0.2em] text-fire">
            Looking for a Co-Founder
          </p>
          <h2 className="mb-6 text-[clamp(2rem,6vw,4.5rem)] font-light uppercase leading-[1.1] text-mist">
            Building the Future
            <br />
            Of Clinical AI
          </h2>
          <p className="mx-auto max-w-3xl text-21 text-mist/80">
            Currently solo technical founder with clinical data & model architecture ready. Would offer <span className="text-fire">30-40% equity</span> to the right person with healthcare operations or commercial experience.
          </p>
        </div>

        {/* Potential Idea */}
        <div className="mb-12 rounded-xl border border-fire/30 bg-fire/5 p-6 md:p-8">
          <h3 className="mb-4 text-xl uppercase tracking-wide text-fire">Potential Project Idea</h3>
          <p className="text-18 font-light leading-relaxed text-mist">
            Building an AI multimodal foundation model that predicts critical outcomes in ICU patients hours/days before they occur, enabling earlier intervention & shifting treatment from reactive to proactive.
          </p>
        </div>

        {/* Ideal Co-founder Grid */}
        <div>
          <h3 className="mb-8 text-center text-2xl uppercase tracking-wide text-mist">
            What I'm Looking For
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {idealCofounder.map((item, index) => {
              const Icon = item.icon;
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
                    <h4 className="mb-3 text-xl text-mist">{item.title}</h4>
                    <p className="text-15 font-light leading-relaxed text-mist/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded border border-mist bg-mist px-8 py-4 text-15 text-space transition-all duration-[400ms] hover:bg-space hover:text-mist"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyChatbotComparison;