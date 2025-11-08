"use client";

import { useState } from 'react';

const researchMetrics = {
  'CLINICAL-AI': [
    { name: "Alzheimer's Prediction (fMRI)", value: 96.04, label: 'AUC 0.96', color: 'fire' },
    { name: 'Autism Detection (fMRI)', value: 91.1, label: 'AUC 0.91', color: 'fire' },
    { name: 'PVS Segmentation', value: 90.0, label: 'Dice 0.90', color: 'fire' },
    { name: 'Cerebral Microbleed Detection', value: 81.0, label: 'Dice 0.81', color: 'fire' },
  ],
  'PUBLICATIONS': [
    { name: 'First-Author Papers', value: 75, label: '3 papers', color: 'fire' },
    { name: 'Total Publications', value: 100, label: '4 papers', color: 'orange' },
    { name: 'Under Review', value: 60, label: '3 manuscripts', color: 'blue' },
    { name: 'Top 10% Journals', value: 100, label: 'All published', color: 'fire' },
  ],
};

const BenchmarkChart = () => {
  const [activeCategory, setActiveCategory] = useState<'CLINICAL-AI' | 'PUBLICATIONS'>('CLINICAL-AI');
  const data = researchMetrics[activeCategory];
  const maxValue = 100;

  return (
    <section id="research" className="bg-space py-8 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Research Impact & Performance Metrics
          </p>
          
          <h3 className="mb-12 text-center text-2xl uppercase tracking-wide text-mist">
            {activeCategory === 'CLINICAL-AI' ? 'Clinical AI Model Performance' : 'Publication Record'}
          </h3>
          
          {/* Chart */}
          <div className="mb-8 rounded-xl border border-strokeDark bg-eerie p-6 md:p-8">
            <div className="space-y-6">
              {data.map((item, index) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-15 text-mist">{item.name}</span>
                    <span className="font-mono text-15 text-mist">{item.label}</span>
                  </div>
                  <div className="relative h-12 overflow-hidden rounded-lg bg-space">
                    <div
                      className={`h-full rounded-lg transition-all duration-1000 ${
                        item.color === 'fire'
                          ? 'bg-gradient-to-r from-fire to-orange-accent'
                          : item.color === 'orange'
                          ? 'bg-gradient-to-r from-orange-accent to-orange-accent-light'
                          : 'bg-gradient-to-r from-blue-accent to-blue-accent-light'
                      }`}
                      style={{
                        width: `${(item.value / maxValue) * 100}%`,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setActiveCategory('CLINICAL-AI')}
              className={`rounded border px-6 py-2 text-14 transition-all duration-300 ${
                activeCategory === 'CLINICAL-AI'
                  ? 'border-fire bg-fire text-mist'
                  : 'border-strokeDark bg-eerie text-mist hover:border-mist'
              }`}
            >
              Clinical AI Models
            </button>
            <button
              onClick={() => setActiveCategory('PUBLICATIONS')}
              className={`rounded border px-6 py-2 text-14 transition-all duration-300 ${
                activeCategory === 'PUBLICATIONS'
                  ? 'border-fire bg-fire text-mist'
                  : 'border-strokeDark bg-eerie text-mist hover:border-mist'
              }`}
            >
              Publications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenchmarkChart;