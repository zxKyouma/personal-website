const NeuroSymbolicModel = () => {
  return (
    <section id="about" className="bg-space py-12 md:py-24">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-8 inline-flex gap-3">
            <span className="rounded border border-strokeDark bg-eerie px-4 py-2 text-14 text-mist">
              Year 3 Medical Student
            </span>
            <span className="rounded border border-strokeDark bg-eerie px-4 py-2 text-14 text-mist">
              AI Researcher
            </span>
          </div>
          
          <p className="mb-6 text-14 uppercase tracking-[0.2em] text-muted-foreground">
            Building Clinical-Grade AI While Studying Medicine
          </p>
          
          <h2 className="mb-12 text-[clamp(1.5rem,4vw,3rem)] font-normal leading-[1.3] text-mist">
            Self-taught AI from scratch since 2024, building deep learning models that predict Alzheimer's disease up to <span className="text-fire">13 years in advance</span> and achieving <span className="text-fire">AUC = 0.96</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#research"
              className="rounded border border-mist bg-mist px-6 py-3 text-15 text-space transition-all duration-[400ms] hover:bg-space hover:text-mist"
            >
              View Research
            </a>
            <a
              href="#publications"
              className="rounded border border-strokeDark bg-transparent px-6 py-3 text-15 text-mist transition-all duration-[400ms] hover:border-mist hover:bg-mist hover:text-space"
            >
              Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroSymbolicModel;