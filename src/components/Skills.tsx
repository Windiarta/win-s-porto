import { useReducedMotion } from 'motion/react';
import DotGrid from './reactbits/DotGrid';
import { skillGroups, ticker } from '../data/portfolio';

const Skills = () => {
  const reduced = useReducedMotion();
  return (
    <section className="skills" id="skills">
      <div className="skills-bg" aria-hidden="true">
        {/* DotGrid: interactive data-grid = data-infrastructure identity (R-07, DESIGN.md) */}
        {!reduced && <DotGrid dotSize={3} gap={30} baseColor="#33333b" activeColor="#FFAE3B" />}
      </div>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Working toolkit</span>
          <h2>The stack behind the platforms</h2>
        </div>
        <div className="skills-cols">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.group}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={`${t}-${i}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
