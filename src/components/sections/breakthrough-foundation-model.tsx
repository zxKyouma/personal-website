import Image from "next/image";
import { Brain, Award, Users, Microscope } from "lucide-react";

const achievements = [
  {
    title: "Alzheimer's Disease Biomarker",
    description: "Novel non-invasive biomarker for early AD/MCI detection in healthy individuals. Trained on OASIS dataset (1,378 individuals) with 10-fold CV achieving mean AUC = 0.9604. Predicts disease up to 13 years in advance.",
    icon: Brain,
  },
  {
    title: "Clinical Translation",
    description: "AI cerebral microbleed detection (Dice = 0.81) deployed in ASPREE clinical trial with 10k+ participants. Partnered remotely with Monash iBRAIN (Australia) for clinical translation.",
    icon: Microscope,
  },
  {
    title: "Research Leadership",
    description: "AI lead for Stanford University's iGEM 2025 team (Gold Medal, Best Oncology Project). Peer reviewer for Neuroscience and Biobehavioral Reviews and Frontiers in Pharmacology.",
    icon: Users,
  },
  {
    title: "International Recognition",
    description: "IChO 2022 silver medalist representing Malaysia. Presented at ECR 2025 (top 500/9,871 submissions, 30k+ attendees). 5 published papers (4 first-author) in top 10% journals.",
    icon: Award,
  },
];

const BreakthroughFoundationModel = () => {
  return (
    <section id="projects" className="bg-space py-12 md:py-24">
      <div className="container">
        <div className="relative rounded-xl bg-mist p-6 text-eerie md:p-12 lg:p-16">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
            alt="Corner decorative element"
            width={20}
            height={21}
            className="absolute -top-px -left-px h-[21px] w-[20px]"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
            alt="Corner decorative element"
            width={20}
            height={21}
            className="absolute -top-px -right-px h-[21px] w-[20px] rotate-90"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
            alt="Corner decorative element"
            width={20}
            height={21}
            className="absolute -bottom-px -left-px h-[21px] w-[20px] -rotate-90"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
            alt="Corner decorative element"
            width={20}
            height={21}
            className="absolute -bottom-px -right-px h-[21px] w-[20px] rotate-180"
          />

          <div className="relative">
            <p className="mb-8 font-mono text-xs uppercase tracking-wider text-orange-accent">
              Key Research Projects
            </p>
            <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-24">
              <div className="flex flex-col">
                <h2 className="font-heading text-[2.6rem] font-light uppercase leading-[1.05] text-eerie md:text-5xl">
                  <span className="block">Building</span>
                  <span className="block font-bold">Clinical-Grade</span>
                  <span className="block">AI Models</span>
                </h2>
                <p className="mt-6 text-21 font-light leading-[1.35] tracking-[0.01em] text-eerie/80">
                  From self-teaching to deploying deep learning models in major research cohorts (ASPREE, iBRAIN)
                </p>
              </div>

              <div className="mt-8 space-y-6 lg:mt-0">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={achievement.title} className="border-l-2 border-orange-accent pl-6">
                      <div className="flex items-start gap-3">
                        <Icon className="mt-1 h-5 w-5 shrink-0 text-orange-accent" />
                        <div>
                          <h3 className="text-lg font-normal text-eerie">
                            {achievement.title}
                          </h3>
                          <p className="mt-2 text-15 font-light leading-snug text-eerie/80">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughFoundationModel;