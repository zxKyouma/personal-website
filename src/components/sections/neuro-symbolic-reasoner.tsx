import React from 'react';
import { BookOpen, FileText } from 'lucide-react';

const publications = [
  {
    title: "Serotonergic psychedelics as potential therapeutics for post-COVID-19 syndrome (or Long COVID): A comprehensive review",
    journal: "Progress in Neuro-Psychopharmacology & Biological Psychiatry",
    year: "2025",
    type: "First Author",
    doi: "10.1016/j.pnpbp.2025.111279"
  },
  {
    title: "The immunomodulatory effects of classical psychedelics: A systematic review of preclinical studies",
    journal: "Progress in Neuro-Psychopharmacology & Biological Psychiatry",
    year: "2025",
    type: "First Author",
    doi: "10.1016/j.pnpbp.2024.111139"
  },
  {
    title: "Cannabinoids: Emerging sleep modulator",
    journal: "Biomedicine & Pharmacotherapy",
    year: "2023",
    type: "First Author",
    doi: "10.1016/j.biopha.2023.115102"
  },
];

const manuscripts = [
  "MedNet-PVS: A MedNeXt-Based Deep Learning Model for Automated Segmentation of Perivascular Spaces (under review at Imaging Neuroscience)",
  "Serotonergic Psychedelics for Autism Spectrum Disorder: Neurobiological Mechanisms and Translational Prospects (under review at Journal of Psychopharmacology)",
  "Triple-Network Effective Connectivity Predicts Dementia Conversion in Cognitively Normal Adults (under review at npj Digital Medicine)"
];

const NeuroSymbolicReasonerSection = () => {
  return (
    <section id="publications" className="bg-space text-mist py-12 md:py-24">
      <div className="container mx-auto px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Academic Contributions
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-light uppercase leading-[1.1] text-mist mb-6">
              Published Research & <span className="text-fire">Peer Review</span>
            </h2>
            <p className="text-21 text-mist/80 max-w-3xl mx-auto">
              5 published papers (4 first-author) in top 10% journals. Peer reviewer for <span className="text-orange-accent">Neuroscience and Biobehavioral Reviews</span> and <span className="text-orange-accent">Frontiers in Pharmacology</span>.
            </p>
          </div>

          {/* Published Papers */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-5 w-5 text-fire" />
              <h3 className="text-xl uppercase tracking-wide text-mist">Published Papers</h3>
            </div>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-strokeDark bg-eerie p-6 transition-all duration-300 hover:border-fire"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded bg-fire/20 px-3 py-1 text-14 text-fire">
                      {pub.type}
                    </span>
                    <span className="text-14 text-mist/60">{pub.year}</span>
                  </div>
                  <h4 className="mb-2 text-18 font-normal text-mist">
                    {pub.title}
                  </h4>
                  <p className="mb-2 text-15 italic text-mist/70">{pub.journal}</p>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-14 text-orange-accent transition-colors hover:text-fire"
                  >
                    DOI: {pub.doi} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Under Review */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-5 w-5 text-blue-accent" />
              <h3 className="text-xl uppercase tracking-wide text-mist">Manuscripts Under Review</h3>
            </div>
            <div className="space-y-3">
              {manuscripts.map((manuscript, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-strokeDark bg-eerie/50 p-5 transition-all duration-300 hover:border-blue-accent"
                >
                  <p className="text-15 font-light text-mist/90">{manuscript}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroSymbolicReasonerSection;